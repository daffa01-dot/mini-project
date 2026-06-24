import { Request, Response } from "express";
import { userService } from "../services/donatur.services";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../configs/prisma.-client-config";

export class UserController {
  async register(req: Request, res: Response) {
    try {
      // DEBUG LOG: Untuk memastikan data benar-benar dibaca oleh Express

      // Ambil data dengan aman dari req.body (mengantisipasi typo huruf besar/kecil dari client)
      const email = req.body?.email;
      const password = req.body?.password;
      const role = req.body?.role;
      const fullName = req.body?.fullName || req.body?.fullname;
      const phoneNumber = req.body?.phoneNumber || req.body?.phonenumber;
      const address = req.body?.address;

      // Teruskan objek payload utuh ke Service
      // Cast to any to allow passing additional profile fields (e.g., address)
      const createdUser = await userService.register({
        email,
        password,
        role,
        fullName,
        phoneNumber,
        address,
      } as any);

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "User and profile registered successfully",
        data: createdUser,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error?.message || "Failed to register user",
        data: null,
      });
    }
  }
  async login(req: Request, res: Response) {
    try {
      const email = req.body?.email || req.body?.usernameOrEmail;
      const password = req.body?.password;

      const userLogin = await userService.login({
        usernameOrEmail: email,
        password: password,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Login successfully",
        data: userLogin,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error?.message || "Failed to login",
        data: null,
      });
    }
  }
}

export default new UserController();
