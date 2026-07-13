import { Request, Response } from "express";
import { DonaturService } from "./donatur-services";
import { StatusCodes } from "http-status-codes";

export class DonaturController {
  static async register(req: Request, res: Response) {
    const data = await DonaturService.register({ body: req.body });

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Register donatur successful",
      data,
    });
  }

  static async login(req: Request, res: Response) {
    const { safeUser, token } = await DonaturService.login({ body: req.body });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Login donatur successful",
      data: safeUser,
    });
  }

  static async getProfile(req: Request, res: Response, next: Function) {
    try {
      const userId = res.locals.payload?.id || "";

      if (!userId) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          success: false,
          message: "Invalid or expired token session",
          data: null,
        });
      }

      const profile = await DonaturService.getProfile(userId);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Get profile donatur successful",
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllUsersDummy(_: Request, res: Response) {
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Get all users dummy successful",
      data: [],
    });
  }
}
