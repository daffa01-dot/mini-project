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
exports.ShelterController = void 0;
const shelter_service_1 = require("./shelter.service");
const http_status_codes_1 = require("http-status-codes");
class ShelterController {
    // Handler untuk list shelter
    // Handler untuk list shelter
    static getList(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, kota } = req.query;
                // 🟢 PERBAIKAN: Tambahkan || "" untuk mengamankan tipe data dari undefined
                const shelters = yield shelter_service_1.ShelterService.getAllShelters({
                    search: search || "",
                    kota: kota || "",
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Daftar shelter berhasil diambil",
                    data: shelters,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    // Handler untuk detail shelter
    static getDetail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                // 🟢 PERBAIKAN: Berikan jaminan type casting 'as string' agar TypeScript tidak menganggapnya undefined
                const shelter = yield shelter_service_1.ShelterService.getShelterById(id);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Detail shelter berhasil diambil",
                    data: shelter,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.ShelterController = ShelterController;
//# sourceMappingURL=shelter.controler.js.map