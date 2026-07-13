import { Router } from "express";
import { AuthController } from "../features/auth.controller";
import { DonaturController } from "../donatur/donatur.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { validate } from "../validation/validate";
import { AuthValidation } from "../features/auth.validation";

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const authRouter = Router();

// ============================================================

authRouter.post(
  "/register-shelter",
  validate(AuthValidation.REGISTER_USER),
  AuthController.register_user,
);

authRouter.post(
  "/login",
  validate(AuthValidation.LOGIN_USER),
  AuthController.login,
);

authRouter.post("/register-donatur", DonaturController.register);

authRouter.post("/logout", AuthController.logout);

authRouter.get(
  "/profile-donatur",
  AuthMiddleware.authenticated(secretKey),
  DonaturController.getProfile,
);

export default authRouter;
