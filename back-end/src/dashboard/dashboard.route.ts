import { Router } from "express";
import { DashboardController } from './dashboard.controler';
import { AuthMiddleware } from "../middlewares/auth.middleware"; // Pastikan path benar

const dashboardRouter = Router();

// Endpoint: GET /api/v1/dashboard/stats
// Kita tambahkan middleware agar hanya Admin/Super Admin yang bisa melihat data ini
dashboardRouter.get(
  "/stats", 
  AuthMiddleware.authenticated(process.env.JWT_SECRET || "default_secret"), 
  AuthMiddleware.authorized(['SHELTER', 'SUPER_ADMIN', 'DONATUR']), 
  DashboardController.getOverviewStats
);

export default dashboardRouter;