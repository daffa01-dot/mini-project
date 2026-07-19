"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardController = void 0;
const http_status_codes_1 = require("http-status-codes");
const dashboardService_1 = require("./dashboardService");
class DashboardController {
    static getOverviewStats(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, role, shelterId } = res.locals.payload;
                const year = req.query.year
                    ? parseInt(req.query.year)
                    : undefined;
                const month = req.query.month
                    ? parseInt(req.query.month)
                    : undefined;
                let dashboard;
                switch (role) {
                    case "DONATUR":
                        dashboard = yield dashboardService_1.DashboardService.getDonorDashboard(id, year, month);
                        break;
                    case "SHELTER":
                        dashboard = yield dashboardService_1.DashboardService.getShelterDashboard(shelterId, year, month);
                        break;
                    // case "SUPER_ADMIN":
                    // case "ADMIN":
                    //   dashboard = await DashboardService.getAdminDashboard(
                    //     year,
                    //     month,
                    //   );
                    //   break;
                    default:
                        return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({
                            success: false,
                            message: "Role tidak valid",
                        });
                }
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Dashboard berhasil diambil",
                    data: dashboard,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.DashboardController = DashboardController;
//# sourceMappingURL=dashboard.controler.js.map