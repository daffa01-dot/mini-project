import { Request, Response, NextFunction } from 'express'
import { AuthService } from './auth.service'
import { StatusCodes } from 'http-status-codes'
import { ResponseError } from '../utils/response-error.util'
import { Role } from '@prisma/client'

export class AuthController {
  
  // ============================================================
  // REGISTER ADMIN & SHELTER
  // ============================================================
  static async register_user(req: Request, res: Response, next: NextFunction) {
    try {
      // 🟢 PERBAIKAN: Langsung ambil data dari req.body karena validasi sudah lolos di tingkat router
      const body = req.body

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
      // 🟢 PERBAIKAN: Ambil data kredensial langsung tanpa casting manual yang memicu TSError
      const body = req.body

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

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      // Menghapus cookie bernama 'token' yang dikirimkan saat login tadi
      res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      })

      return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Logout successful. Token session cleared.'
      })
    } catch (error) {
      next(error)
    }
  }}