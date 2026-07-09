import { Router } from "express";
import { DashboardController } from './dashboard.controler'

const dashboardRouter = Router();

// Endpoint: GET /api/v1/dashboard/stats
dashboardRouter.get("/stats", DashboardController.getOverviewStats);

export default dashboardRouter;