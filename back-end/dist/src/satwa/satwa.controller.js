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
exports.SatwaController = void 0;
const satwa_service_1 = require("./satwa.service");
const http_status_codes_1 = require("http-status-codes");
class SatwaController {
    static createSatwa(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Ambil user ID dari token JWT (di-set oleh AuthMiddleware)
                const userId = res.locals.payload.id;
                // req.body berisi data teks (nama, jenis), req.file berisi gambar (foto)
                const data = yield satwa_service_1.SatwaService.create(userId, req.body, req.file);
                res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    success: true,
                    message: "Data hewan berhasil ditambahkan",
                    data,
                });
            }
            catch (error) {
                next(error); // Serahkan ke error middleware
            }
        });
    }
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield satwa_service_1.SatwaService.getAllSatwa();
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Successfully fetched all animals",
                    data,
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
                const { id } = req.params;
                const data = yield satwa_service_1.SatwaService.getSatwaById(id);
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Successfully fetched animal details",
                    data,
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
                const { id } = req.params;
                // KUNCI KEAMANAN: Ambil userId dari token untuk verifikasi kepemilikan
                const userId = res.locals.payload.id;
                const updateData = req.body;
                // NOTE: Jika ingin update foto, logika req.file ditambahkan di service nanti
                const data = yield satwa_service_1.SatwaService.updateSatwa(userId, id, updateData);
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Successfully updated animal",
                    data,
                });
            }
            catch (error) {
                next(error);
            }
            console.log("UPDATE RESULT:", "data.id");
            console.log("UPDATE RESULT:", "data.nama");
        });
    }
    static remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                // KUNCI KEAMANAN: Ambil userId dari token untuk verifikasi kepemilikan
                const userId = res.locals.payload.id;
                yield satwa_service_1.SatwaService.deleteSatwa(userId, id);
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Successfully deleted animal",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getMyAnimals(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = res.locals.payload.id;
                const data = yield satwa_service_1.SatwaService.getMyAnimals(userId);
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Successfully fetched my animals",
                    data,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.SatwaController = SatwaController;
//# sourceMappingURL=satwa.controller.js.map