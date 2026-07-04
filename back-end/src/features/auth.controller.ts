import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { validate } from '../validation/validate'
import { AuthValidation } from './auth.validation'
import { StatusCodes } from 'http-status-codes'

export class AuthController {
  static loginUser(arg0: string, loginUser: any) {
      throw new Error('Method not implemented.')
  }
  static registerEmployee(arg0: string, registerEmployee: any) {
      throw new Error('Method not implemented.')
  }
  static loginEmployee(arg0: string, loginEmployee: any) {
      throw new Error('Method not implemented.')
  }
  // LOGIN ADMIN & SHELTER
  static async loginShelter(req: Request, res: Response) {
    const { body } = validate(AuthValidation.LOGIN_USER, {
      body: req.body
    }) as { body: typeof req.body }

    const { safeUser, token } = await AuthService.login({ body })

    res.cookie(
      'token',
      { token },
      {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
      }
    )

    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Login employee successful',
      data: safeUser
    })
  }

  // REGISTER ADMIN & SHELTER
  static async register_user(req: Request, res: Response) {
    const { body } = validate(AuthValidation.REGISTER_USER, {
      body: req.body
    })

    const safeUser = await AuthService.register({ body })

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Register employee successful',
      data: safeUser
    })
  }
}