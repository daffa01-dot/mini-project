import { Request, Response } from "express";
import { userService } from "../services/user.services";
import { StatusCodes } from "http-status-codes";

export class UserController {
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
