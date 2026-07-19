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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
const client_1 = require("@prisma/client");
class DashboardService {
    static getDateFilter(year, month) {
        if (!year)
            return {};
        const start = new Date(year, month ? month - 1 : 0, 1);
        const end = month ? new Date(year, month, 1) : new Date(year + 1, 0, 1);
        return {
            createdAt: {
                gte: start,
                lt: end,
            },
        };
    }
    static getShelterDashboard(shelterId, year, month) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const filter = this.getDateFilter(year, month);
            const [totalSatwa, totalDonasi, totalPending, totalLaporan, recentDonations,] = yield Promise.all([
                prisma_client_config_1.default.satwa.count({
                    where: {
                        shelterId,
                        deletedAt: null,
                    },
                }),
                prisma_client_config_1.default.donasi.aggregate({
                    _sum: {
                        nominal: true,
                    },
                    where: Object.assign({ shelterId, deletedAt: null, status: client_1.Status.DIVERIFIKASI }, filter),
                }),
                prisma_client_config_1.default.donasi.count({
                    where: Object.assign({ shelterId, deletedAt: null, status: client_1.Status.MENUNGGU }, filter),
                }),
                prisma_client_config_1.default.laporan.count({
                    where: {
                        satwa: {
                            shelterId,
                        },
                        deletedAt: null,
                    },
                }),
                prisma_client_config_1.default.donasi.findMany({
                    where: {
                        shelterId,
                        deletedAt: null,
                    },
                    include: {
                        donatur: true,
                        satwa: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 5,
                }),
            ]);
            return {
                summary: {
                    totalSatwa,
                    totalDonasi: (_a = totalDonasi._sum.nominal) !== null && _a !== void 0 ? _a : 0,
                    totalPending,
                    totalLaporan,
                },
                recentDonations,
            };
        });
    }
    static getDonorDashboard(donaturId, year, month) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const filter = this.getDateFilter(year, month);
            const [totalNominal, jumlahDonasi, pending, verified, recentDonations] = yield Promise.all([
                prisma_client_config_1.default.donasi.aggregate({
                    _sum: {
                        nominal: true,
                    },
                    where: Object.assign({ donaturId, deletedAt: null, status: client_1.Status.DIVERIFIKASI }, filter),
                }),
                prisma_client_config_1.default.donasi.count({
                    where: Object.assign({ donaturId, deletedAt: null }, filter),
                }),
                prisma_client_config_1.default.donasi.count({
                    where: Object.assign({ donaturId, deletedAt: null, status: client_1.Status.MENUNGGU }, filter),
                }),
                prisma_client_config_1.default.donasi.count({
                    where: Object.assign({ donaturId, deletedAt: null, status: client_1.Status.DIVERIFIKASI }, filter),
                }),
                prisma_client_config_1.default.donasi.findMany({
                    where: {
                        donaturId,
                        deletedAt: null,
                    },
                    include: {
                        satwa: true,
                        shelter: true,
                        donatur: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 5,
                }),
            ]);
            return {
                summary: {
                    totalNominal: (_a = totalNominal._sum.nominal) !== null && _a !== void 0 ? _a : 0,
                    jumlahDonasi,
                    pending,
                    verified,
                },
                recentDonations,
            };
        });
    }
    static getAdminDashboard(year, month) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const filter = this.getDateFilter(year, month);
            const [totalUser, totalShelter, totalSatwa, totalDonasi, recentDonations,] = yield Promise.all([
                prisma_client_config_1.default.user.count({
                    where: {
                        deletedAt: null,
                    },
                }),
                prisma_client_config_1.default.shelter.count({
                    where: {
                        deletedAt: null,
                    },
                }),
                prisma_client_config_1.default.satwa.count({
                    where: {
                        deletedAt: null,
                    },
                }),
                prisma_client_config_1.default.donasi.aggregate({
                    _sum: {
                        nominal: true,
                    },
                    where: Object.assign({ deletedAt: null, status: client_1.Status.DIVERIFIKASI }, filter),
                }),
                prisma_client_config_1.default.donasi.findMany({
                    where: Object.assign({ deletedAt: null }, filter),
                    include: {
                        donatur: true,
                        shelter: true,
                        satwa: true,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 10,
                }),
            ]);
            return {
                summary: {
                    totalUser,
                    totalShelter,
                    totalSatwa,
                    totalDonasi: (_a = totalDonasi._sum.nominal) !== null && _a !== void 0 ? _a : 0,
                },
                recentDonations,
            };
        });
    }
}
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboardService.js.map