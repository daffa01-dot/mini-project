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
exports.DonasiController = void 0;
const donasi_service_1 = require("./donasi.service");
const http_status_codes_1 = require("http-status-codes");
class DonasiController {
    static checkout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const donaturId = (_a = res.locals.payload) === null || _a === void 0 ? void 0 : _a.id;
                const { nominal, catatan, satwaId, shelterId } = req.body;
                console.log("CHECKOUT JWT");
                console.log(res.locals.payload);
                const result = yield donasi_service_1.DonasiService.createCheckout({
                    nominal: Number(nominal),
                    catatan,
                    satwaId,
                    shelterId,
                    donaturId: donaturId,
                });
                return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    success: true,
                    message: "Checkout berhasil, silakan lakukan transfer manual",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static uploadBukti(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = res.locals.payload.id;
                const donasiId = req.params.donasiId;
                const file = req.file;
                if (!file) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                        success: false,
                        message: "File bukti resi transfer wajib diunggah",
                    });
                }
                /**
                 * Simpan path yang bisa diakses browser,
                 * jangan simpan file.path (D:\....)
                 */
                const buktiResiPath = `/uploads/resi/${file.filename}`;
                const result = yield donasi_service_1.DonasiService.uploadBuktiResi({
                    donasiId,
                    donaturId: userId,
                    buktiResiPath,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: result.message,
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static verifikasi(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const donasiId = req.params.donasiId;
                const { statusBaru, alasanDitolak } = req.body;
                const userId = res.locals.payload.id;
                const result = yield donasi_service_1.DonasiService.verifikasiDonasi({
                    userId,
                    donasiId,
                    statusBaru,
                    alasanDitolak,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: `Status donasi berhasil diperbarui menjadi ${statusBaru}`,
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getRiwayat(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = res.locals.payload;
                const result = yield donasi_service_1.DonasiService.getRiwayat({
                    role: payload.role,
                    userId: payload.id,
                    shelterId: payload.shelterId,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Riwayat donasi berhasil diambil.",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static deleteDonasi(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let donasiId = req.params.donasiId;
                if (!donasiId || Array.isArray(donasiId)) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                        success: false,
                        message: "Parameter donasiId tidak valid",
                    });
                }
                // Pastikan fungsi ini memanggil service yang kita buat sebelumnya
                const userId = res.locals.payload.id;
                const role = res.locals.payload.role;
                const result = yield donasi_service_1.DonasiService.deleteDonasi(userId, role, donasiId);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Donasi berhasil dihapus",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const donasiId = req.params.donasiId;
                if (!donasiId || Array.isArray(donasiId)) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                        success: false,
                        message: "Parameter donasiId tidak valid",
                    });
                }
                const result = yield donasi_service_1.DonasiService.getById(donasiId);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Detail donasi berhasil diambil.",
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.DonasiController = DonasiController;
//# sourceMappingURL=donasi.controller.js.map