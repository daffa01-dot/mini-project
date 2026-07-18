import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { DashboardService } from "./dashboardService";

export class DashboardController {
  static async getOverviewStats(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id, role, shelterId } = res.locals.payload;

      const year = req.query.year
        ? parseInt(req.query.year as string)
        : undefined;

      const month = req.query.month
        ? parseInt(req.query.month as string)
        : undefined;

      let dashboard;

      switch (role) {
        case "DONATUR":
          dashboard = await DashboardService.getDonorDashboard(
            id,
            year,
            month,
          );
          break;

        case "SHELTER":
          dashboard = await DashboardService.getShelterDashboard(
            shelterId,
            year,
            month,
          );
          break;

        // case "SUPER_ADMIN":
        // case "ADMIN":
        //   dashboard = await DashboardService.getAdminDashboard(
        //     year,
        //     month,
        //   );
        //   break;

        default:
          return res.status(StatusCodes.FORBIDDEN).json({
            success: false,
            message: "Role tidak valid",
          });
      }

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Dashboard berhasil diambil",
        data: dashboard,
      });
    } catch (error) {
      next(error);
    }
  }
}