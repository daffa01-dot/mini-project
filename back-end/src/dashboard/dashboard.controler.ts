import { NextFunction, Request, Response } from "express";
import { DashboardService } from './dashboardService';
import { StatusCodes } from "http-status-codes";

export class DashboardController {
  static async getOverviewStats(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await DashboardService.getStats();
      
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