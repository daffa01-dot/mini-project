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
exports.LaporanController = void 0;
const laporan_service_1 = require("./laporan.service");
const laporan_validation_1 = require("../validation/laporan.validation");
const http_status_codes_1 = require("http-status-codes");
class LaporanController {
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userPayload = res.locals.payload || res.locals.user || req.user;
                const validatedData = laporan_validation_1.CreateLaporanSchema.parse(req.body);
                const file = req.file;
                if (!file) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                        success: false,
                        message: "Foto perkembangan kondisi satwa terbaru wajib diunggah",
                    });
                }
                const fotoUrl = file.path || file.url;
                const result = yield laporan_service_1.LaporanService.createLaporan({
                    judul: validatedData.judul,
                    deskripsi: validatedData.deskripsi,
                    satwaId: validatedData.satwaId,
                    fotoUrl: fotoUrl,
                    userPayload,
                });
                return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    success: true,
                    message: "Kabar terbaru satwa berhasil dipublikasikan",
                    data: result,
                });
            }
            catch (error) {
                if (error.name === "ZodError") {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                        success: false,
                        message: error.errors[0].message,
                    });
                }
                return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    success: false,
                    message: error.message,
                });
            }
        });
    }
    static getBySatwa(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const satwaId = Array.isArray(req.params.satwaId)
                    ? req.params.satwaId[0]
                    : req.params.satwaId;
                if (!satwaId) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                        success: false,
                        message: "ID Satwa tidak boleh kosong",
                    });
                }
                const result = yield laporan_service_1.LaporanService.getLaporanBySatwa(satwaId);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Berhasil mengambil linimasa kabar satwa",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getDetail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const result = yield laporan_service_1.LaporanService.getDetail(id);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Detail laporan berhasil diambil.",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userPayload = res.locals.payload || res.locals.user || req.user;
                const file = req.file;
                const result = yield laporan_service_1.LaporanService.updateLaporan({
                    laporanId: id,
                    judul: req.body.judul,
                    deskripsi: req.body.deskripsi,
                    fotoUrl: (file === null || file === void 0 ? void 0 : file.path) || (file === null || file === void 0 ? void 0 : file.url),
                    userPayload,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Laporan berhasil diperbarui.",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userPayload = res.locals.payload || res.locals.user || req.user;
                const result = yield laporan_service_1.LaporanService.deleteLaporan(id, userPayload);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Laporan berhasil dihapus.",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.LaporanController = LaporanController;
//# sourceMappingURL=laporan.controler.js.map