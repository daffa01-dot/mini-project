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
exports.LaporanService = void 0;
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
const http_status_codes_1 = require("http-status-codes");
const response_error_util_1 = require("../utils/response-error.util");
class LaporanService {
    static createLaporan(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { judul, deskripsi, satwaId, fotoUrl, userPayload } = data;
            const satwa = yield prisma_client_config_1.default.satwa.findFirst({
                where: {
                    id: satwaId,
                    deletedAt: null,
                },
            });
            if (!satwa) {
                throw new Error("Data satwa tidak ditemukan");
            }
            if (userPayload.role === "SHELTER") {
                const userShelter = yield prisma_client_config_1.default.shelter.findFirst({
                    where: {
                        userId: userPayload.id,
                        deletedAt: null,
                    },
                });
                if (!userShelter) {
                    throw new Error("Data shelter Anda tidak ditemukan di sistem.");
                }
                const idShelterSatwa = String(satwa.shelterId).trim().toLowerCase();
                const idShelterUser = String(userShelter.id).trim().toLowerCase();
                if (idShelterSatwa !== idShelterUser) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, `Anda tidak memiliki hak akses untuk membuat laporan pada satwa di shelter lain.`);
                }
            }
            return yield prisma_client_config_1.default.laporan.create({
                data: {
                    judul,
                    deskripsi,
                    foto: fotoUrl,
                    satwaId,
                },
            });
        });
    }
    static getLaporanBySatwa(satwaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_client_config_1.default.laporan.findMany({
                where: {
                    satwaId,
                    deletedAt: null,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
        });
    }
    static deleteLaporan(id, userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const laporan = yield prisma_client_config_1.default.laporan.findFirst({
                where: {
                    id,
                    deletedAt: null,
                },
                include: {
                    satwa: true,
                },
            });
            if (!laporan) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Laporan tidak ditemukan.");
            }
            if (userPayload.role === "SHELTER") {
                const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                    where: {
                        userId: userPayload.id,
                        deletedAt: null,
                    },
                });
                if (!shelter) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Shelter tidak ditemukan.");
                }
                if (laporan.satwa.shelterId !== shelter.id) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Anda tidak memiliki akses menghapus laporan ini.");
                }
            }
            return yield prisma_client_config_1.default.laporan.update({
                where: {
                    id,
                },
                data: {
                    deletedAt: new Date(),
                },
            });
        });
    }
    static getDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const laporan = yield prisma_client_config_1.default.laporan.findFirst({
                where: {
                    id,
                    deletedAt: null,
                },
                include: {
                    satwa: {
                        select: {
                            id: true,
                            nama: true,
                            foto: true,
                            shelterId: true,
                        },
                    },
                },
            });
            if (!laporan) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Laporan tidak ditemukan.");
            }
            return laporan;
        });
    }
    static updateLaporan(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { laporanId, judul, deskripsi, fotoUrl, userPayload } = data;
            const laporan = yield prisma_client_config_1.default.laporan.findFirst({
                where: {
                    id: laporanId,
                    deletedAt: null,
                },
                include: {
                    satwa: true,
                },
            });
            if (!laporan) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Laporan tidak ditemukan.");
            }
            if (userPayload.role === "SHELTER") {
                const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                    where: {
                        userId: userPayload.id,
                        deletedAt: null,
                    },
                });
                if (!shelter) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Shelter tidak ditemukan.");
                }
                if (laporan.satwa.shelterId !== shelter.id) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Anda tidak memiliki akses untuk mengubah laporan ini.");
                }
            }
            return yield prisma_client_config_1.default.laporan.update({
                where: {
                    id: laporanId,
                },
                data: Object.assign(Object.assign(Object.assign({}, (judul !== undefined && { judul })), (deskripsi !== undefined && { deskripsi })), (fotoUrl !== undefined && { foto: fotoUrl })),
            });
        });
    }
}
exports.LaporanService = LaporanService;
//# sourceMappingURL=laporan.service.js.map