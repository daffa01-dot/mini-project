import { Router } from "express";
import { AuthController } from "../features/auth.controller"
import { DonaturController } from "../donatur/donatur.controller"
import { Role } from "@prisma/client";

// 1. UBAH IMPORT: Panggil AuthMiddleware (Bukan fungsi verifyToken/checkRole)
import { AuthMiddleware } from "../middlewares/auth.middleware"; 

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const authRouter = Router();

// Endpoint Publik
authRouter.post("/register-shelter", AuthController.register_user);
authRouter.post("/login-shelter", AuthController.loginShelter);
authRouter.post("/register-donatur", DonaturController.register);
authRouter.post("/login-donatur", DonaturController.login);

// Endpoint Privat
// 2. UBAH PEMANGGILAN: Gunakan AuthMiddleware.authenticated dan authorized
authRouter.get(
  "/profile-donatur", 
  AuthMiddleware.authenticated(secretKey), 
  AuthMiddleware.authorized([Role.DONATUR]), 
  DonaturController.getProfile
);

export default authRouter;