"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_controler_1 = require("./dashboard.controler");
const auth_middleware_1 = require("../middlewares/auth.middleware"); // Pastikan path benar
const dashboardRouter = (0, express_1.Router)();
// Endpoint: GET /api/v1/dashboard/stats
// Kita tambahkan middleware agar hanya Admin/Super Admin yang bisa melihat data ini
dashboardRouter.get("/stats", auth_middleware_1.AuthMiddleware.authenticated(process.env.JWT_SECRET || "default_secret"), auth_middleware_1.AuthMiddleware.authorized(['SHELTER', 'SUPER_ADMIN', 'DONATUR']), dashboard_controler_1.DashboardController.getOverviewStats);
exports.default = dashboardRouter;
//# sourceMappingURL=dashboard.route.js.map