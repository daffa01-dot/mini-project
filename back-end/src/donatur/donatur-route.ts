import { Router } from "express";
import { DonaturController } from './donatur.controller'
import { Role } from "@prisma/client";

// 1. PERBAIKI IMPORT: Ambil AuthMiddleware, bukan fungsi verifyToken/checkRole
import { AuthMiddleware } from "../middlewares/auth.middleware"; 

const donaturRouter = Router();
const authMiddleware = new AuthMiddleware();

// Contoh endpoint profile di dalam router donatur Anda
donaturRouter.get(
  "/profile",
  AuthMiddleware.authenticated.bind(authMiddleware),
  AuthMiddleware.authorized([Role.DONATUR]),
  DonaturController.getProfile
);

export default donaturRouter;