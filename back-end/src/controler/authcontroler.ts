import { Request, Response } from "express";
import { userService } from "../services/donatur.services";
import { StatusCodes } from "http-status-codes";
import { UserController } from "./donatur.controler";

export const authcontroller = {
  async login(req: Request, res: Response) {},

  async register(req: Request, res: Response) {
    try {
      const { email, password, role, fullName, phoneNumber } = req?.body;

      const createdUser = await userService.register({
        email,
        password,
        role,
        fullName,
        phoneNumber,
      });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "User registered successfully",
        data: createdUser,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error?.message || "Failed to register user",
        data: null,
      });
    }
  },
};
export default new UserController();
