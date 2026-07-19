import { NextFunction, Request, Response } from "express";
import { JWTUtil } from "../utils/jwt";
import { ResponseError } from "../utils/response-error.util";
import { StatusCodes } from "http-status-codes";
import { Role } from "@prisma/client";

export class AuthMiddleware {
  static authenticated(secretKey: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        console.log("DEBUG URL:", req.originalUrl);
        let token: string | null | undefined;

        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer ")) {
          token = authHeader.split(" ")[1];
        } else if (req.cookies && req.cookies.token) {
          token = req.cookies.token;
        }

        if (!token) {
          throw new ResponseError(
            StatusCodes.UNAUTHORIZED,
            "Token must be provided",
          );
        }

        const payload = JWTUtil.verifyToken(token);
        console.log("PAYLOAD JWT:", payload);

        res.locals.payload = payload;
        next();
      } catch (error) {
        next(error);
      }
    };
  }

  static authorized(allowedRoles: Role[] | string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const payload = res.locals.payload;

        if (!payload || !allowedRoles.includes(payload.role)) {
          throw new ResponseError(
            StatusCodes.FORBIDDEN,
            "Unauthorized user role",
          );
        }

        next();
      } catch (error) {
        next(error);
      }
    };
  }
}
