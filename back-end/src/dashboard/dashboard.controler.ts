import { NextFunction, Request, Response } from "express";
import { DashboardService } from "./dashboardService";
import { StatusCodes } from "http-status-codes";

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

      let stats;

      if (role === "SUPER_ADMIN" || role === "ADMIN") {
        stats = await DashboardService.getStats(year, month);
      } else if (role === "SHELTER") {
        stats = await DashboardService.getShelterStats(shelterId, year, month);
      } else if (role === "DONATUR") {
        stats = await DashboardService.getDonaturStats(id, year, month);
      } else {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ success: false, message: "Role tidak valid" });
      }

      res.status(StatusCodes.OK).json({
        success: true,
        message: "Statistik dashboard berhasil diambil",
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }
}
