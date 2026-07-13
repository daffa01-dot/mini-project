import { NextFunction, Request, Response } from 'express';
import { JWTUtil } from "../utils/jwt";
import { ResponseError } from '../utils/response-error.util';
import { StatusCodes } from 'http-status-codes';
import { Role } from '@prisma/client'; 

export class AuthMiddleware {
  // ============================================================
  // AUTHENTICATED (Kembali menggunakan gaya HOF dengan Secret Key)
  // ============================================================
  static authenticated(secretKey: string) {
    // Kita WAJIB me-return fungsi middleware asli (req, res, next)
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log("DEBUG URL:", req.originalUrl); // 🟢 TAMBAHKAN INI
        let token = null;

        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
          token = authHeader.split(' ')[1];
        } else if (req.cookies && req.cookies.token) {
          token = req.cookies.token;
        }

        if (!token) {
          throw new ResponseError(
            StatusCodes.UNAUTHORIZED,
            'Token must be provided',
          );
        }

        // Jika JWTUtil Anda butuh secretKey, tulis: JWTUtil.verifyToken(token, secretKey)
        // Jika JWTUtil Anda hanya menerima 1 argumen (token), tulis seperti di bawah:
        const payload = JWTUtil.verifyToken(token); 
        console.log("PAYLOAD JWT:", payload);

        res.locals.payload = payload;
        next();
      } catch (error) {
        next(error);
      }
    };
  }

  // ============================================================
  // AUTHORIZED
  // ============================================================
  static authorized(allowedRoles: Role[] | string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const payload = res.locals.payload;

        if (!payload || !allowedRoles.includes(payload.role)) {
          throw new ResponseError(
            StatusCodes.FORBIDDEN,
            'Unauthorized user role',
          );
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }
}