import { Router } from "express";
import { DonaturController } from './donatur.controller'
import { Role } from "@prisma/client";

// 1. PERBAIKI IMPORT: Ambil AuthMiddleware, bukan fungsi verifyToken/checkRole
import { AuthMiddleware } from "../middlewares/auth.middleware"; 

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const donaturRouter = Router();

// Contoh endpoint profile di dalam router donatur Anda
donaturRouter.get(
  "/profile", 
  AuthMiddleware.authenticated(secretKey), // 2. Gunakan method kelas
  AuthMiddleware.authorized([Role.DONATUR]), // 3. Gunakan method kelas
  DonaturController.getProfile
);

export default donaturRouter;