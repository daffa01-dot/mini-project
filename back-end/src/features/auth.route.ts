import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validate } from "../validation/validate"; 
import { AuthValidation } from './auth.validation';

const authRouter = Router();

authRouter.post("/register", validate(AuthValidation.REGISTER_USER), AuthController.register);
authRouter.post("/login", validate(AuthValidation.LOGIN_USER), AuthController.login);
authRouter.post("/logout", AuthController.logout);

export default authRouter;