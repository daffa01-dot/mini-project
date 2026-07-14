import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { StatusCodes } from 'http-status-codes';

export class AuthController {
  
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const safeUser = await AuthService.register({ body });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Registration successful',
        data: safeUser
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const { safeUser, token } = await AuthService.login({ body });

      // Secure HTTPOnly cookie injection
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Login successful',
        data: {
          user: safeUser,
          token
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: 'Logout successful. Token session cleared.'
      });
    } catch (error) {
      next(error);
    }
  }
}