import { Router } from "express";
import { AuthController } from "../features/auth.controller";
import { DonaturController } from "../donatur/donatur.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware"; 
import { validate } from "../validation/validate"; // 🟢 PERBAIKAN 1: Import middleware validate
import { AuthValidation } from '../features/auth.validation' // 🟢 PERBAIKAN 2: Import skema Zod validasi Anda

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const authRouter = Router();

// ============================================================
// ENDPOINT PUBLIK (Dengan Validasi Middleware)
// ============================================================

// 🟢 PERBAIKAN 3: Menyisipkan validate() dengan tanda kurung dan koma yang benar
authRouter.post(
  "/register-shelter", 
  validate(AuthValidation.REGISTER_USER), 
  AuthController.register_user
);

authRouter.post(
  "/login-shelter", 
  validate(AuthValidation.LOGIN_USER), 
  AuthController.loginShelter
);

authRouter.post("/register-donatur", DonaturController.register);
authRouter.post("/login-donatur", DonaturController.login);
authRouter.post("/logout", AuthController.logout);

// ============================================================
// ENDPOINT PRIVAT
// ============================================================
authRouter.get(
  "/profile-donatur", 
  AuthMiddleware.authenticated(secretKey), 
  DonaturController.getProfile
);



export default authRouter;