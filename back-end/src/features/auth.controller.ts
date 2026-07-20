import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";
import { StatusCodes } from "http-status-codes";
import { ResponseError } from "../utils/response-error.util";
import { Role } from "@prisma/client";
import prisma from "../configs/prisma-client.config";

export class AuthController {
  static async register_user(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;

      if (body.role === Role.DONATUR) {
        throw new ResponseError(
          StatusCodes.FORBIDDEN,
          "Registration for Donatur is not allowed on this endpoint",
        );
      }

      const safeUser = await AuthService.register({ body });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Register Admin/Shelter successful",
        data: safeUser,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;

      const { safeUser, token } = await AuthService.login({ body });

      const isProd = process.env.NODE_ENV === "production";

      res.cookie("token", token, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? "none" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Login berhasil",
        data: {
          token,
          user: safeUser,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "Mini-Project",
        sameSite: "strict",
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Logout successful. Token session cleared.",
      });
    } catch (error) {
      next(error);
    }
  }
  static async me(req: Request, res: Response) {
    const payload = res.locals.payload;

    const user = await prisma.user.findUnique({
      where: { id: payload.id },
      select: {
        id: true,
        namaLengkap: true,
        email: true,
        role: true,
      },
    });

    return res.json({
      success: true,
      data: user,
    });
  }
}
