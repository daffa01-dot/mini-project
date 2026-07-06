import { NextFunction, Request, Response } from 'express';
import { JWTUtil } from "../utils/jwt"
import { ResponseError } from '../utils/response-error.util';
import { StatusCodes } from 'http-status-codes';

// FIX: Tambahkan import Role dari @prisma/client agar error Ln 50 hilang
import { Role } from '@prisma/client'; 

export class AuthMiddleware {
  // ============================================================
  // AUTHENTICATED
  // ============================================================
  static authenticated(secretKey: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        let token = null;

        // Cek dari Header Authorization (Bearer)
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
          token = authHeader.split(' ')[1];
        } 
        // Cek dari Cookies
        else if (req.cookies && req.cookies.token) {
          token = req.cookies.token;
        }

        if (!token) {
          throw new ResponseError(
            StatusCodes.UNAUTHORIZED,
            'Token must be provided',
          );
        }

        // FIX: Hapus argumen 'secretKey' jika JWTUtil Anda hanya butuh 1 argumen (token) agar error Ln 35 hilang
        const payload = JWTUtil.verifyToken(token); 

        // Simpan ke res.locals
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