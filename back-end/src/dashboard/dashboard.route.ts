import { Router } from "express";
import { DashboardController } from "./dashboard.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";

const dashboardRouter = Router();

dashboardRouter.get(
  "/stats",
  AuthMiddleware.authenticated(process.env.JWT_SECRET || "default_secret"),
  AuthMiddleware.authorized(["SHELTER", "SUPER_ADMIN", "DONATUR"]),
  DashboardController.getOverviewStats,
);

export default dashboardRouter;
