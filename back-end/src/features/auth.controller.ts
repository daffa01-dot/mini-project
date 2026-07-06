import { Request, Response, NextFunction } from 'express'
import { AuthService } from './auth.service'
import { validate } from '../validation/validate'
import { AuthValidation } from './auth.validation'
import { StatusCodes } from 'http-status-codes'
import { ResponseError } from '../utils/response-error.util'
import { Role } from '@prisma/client'

export class AuthController {
  
  // ============================================================
  // REGISTER ADMIN & SHELTER
  // ============================================================
  static async register_user(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = validate(AuthValidation.REGISTER_USER, {
        body: req.body
      })

      // PROTEKSI: Jika payload mencoba mendaftarkan DONATUR, lempar error
      if (body.role === Role.DONATUR) {
        throw new ResponseError(
          StatusCodes.FORBIDDEN, 
          'Registration for Donatur is not allowed on this endpoint'
        )
      }

      const safeUser = await AuthService.register({ body })

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Register Admin/Shelter successful',
        data: safeUser
      })
    } catch (error) {
      next(error)
    }
  }

  // ============================================================
  // LOGIN ADMIN & SHELTER
  // ============================================================
  static async loginShelter(req: Request, res: Response, next: NextFunction) {
    try {
      const { body } = validate(AuthValidation.LOGIN_USER, {
        body: req.body
      }) as { body: typeof req.body }

      const { safeUser, token } = await AuthService.login({ body })

      // PROTEKSI: Jika akun DONATUR mencoba masuk ke dashboard internal, blokir
      if (safeUser.role === Role.DONATUR) {
        throw new ResponseError(
          StatusCodes.UNAUTHORIZED, 
          'Donatur accounts are not authorized to login here'
        )
      }

      // Memperbaiki struktur penyimpanan token di cookie agar tidak double-nesting ({ token })
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 hari
      })

      return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Login Admin/Shelter successful',
        data: {
          user: safeUser,
          token
        }
      })
    } catch (error) {
      next(error)
    }
  }
}