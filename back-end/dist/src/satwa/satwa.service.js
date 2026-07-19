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
exports.SatwaService = void 0;
const satwa_validation_1 = require("../validation/satwa.validation");
const cloudinaryutil_1 = require("../utils/cloudinaryutil");
const response_error_util_1 = require("../utils/response-error.util");
const http_status_codes_1 = require("http-status-codes");
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
class SatwaService {
    static getAllSatwa() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_client_config_1.default.satwa.findMany({
                where: { deletedAt: null },
                include: { shelter: true },
                orderBy: { createdAt: "desc" },
            });
        });
    }
    static getSatwaById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const satwa = yield prisma_client_config_1.default.satwa.findFirst({
                where: { id, deletedAt: null },
                include: { shelter: true },
            });
            if (!satwa)
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Satwa tidak ditemukan");
            return satwa;
        });
    }
    static updateSatwa(userId, satwaId, payload, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const validatedData = satwa_validation_1.SatwaValidation.UPDATE.parse({
                body: payload,
            }).body;
            // 1. Get the shelter belonging to the user
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                where: {
                    userId,
                    deletedAt: null,
                },
            });
            if (!shelter)
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Profil Shelter tidak ditemukan");
            // 2. Find the satwa and check if it belongs to this shelter
            const satwa = yield prisma_client_config_1.default.satwa.findFirst({
                where: { id: satwaId, shelterId: shelter.id, deletedAt: null },
            });
            if (!satwa) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Anda tidak memiliki akses ke satwa ini");
            }
            let fotoUrl = satwa.foto;
            if (file) {
                fotoUrl = yield cloudinaryutil_1.CloudinaryUtil.uploadBuffer(file.buffer, "hewan_photos");
            }
            // Build update data
            const updateData = Object.fromEntries(Object.entries(Object.assign(Object.assign({}, validatedData), { foto: fotoUrl })).filter(([, value]) => value !== undefined));
            // Update
            console.log("validatedData:", validatedData);
            console.log("updateData:", updateData);
            console.log("BEFORE");
            const result = yield prisma_client_config_1.default.satwa.update({
                where: {
                    id: satwaId,
                },
                data: updateData,
            });
            console.log("RESULT");
            console.log(result);
            return result;
        });
    }
    static deleteSatwa(userId, satwaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({ where: { userId } });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Profil Shelter tidak ditemukan");
            }
            const satwa = yield prisma_client_config_1.default.satwa.findFirst({
                where: {
                    id: satwaId,
                    shelterId: shelter.id,
                },
            });
            if (!satwa) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Anda tidak memiliki akses ke satwa ini");
            }
            return yield prisma_client_config_1.default.satwa.update({
                where: { id: satwaId },
                data: { deletedAt: new Date() },
            });
        });
    }
    static create(userId, payload, file) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const validatedData = satwa_validation_1.SatwaValidation.CREATE.parse({ body: payload }).body;
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                where: { userId, deletedAt: null },
            });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Profil Shelter belum dibuat.");
            }
            let fotoUrl = null;
            if (file) {
                fotoUrl = yield cloudinaryutil_1.CloudinaryUtil.uploadBuffer(file.buffer, "hewan_photos");
            }
            return yield prisma_client_config_1.default.satwa.create({
                data: {
                    shelterId: shelter.id,
                    nama: validatedData.nama,
                    jenis: validatedData.jenis,
                    ras: (_a = validatedData.ras) !== null && _a !== void 0 ? _a : null,
                    umur: validatedData.umur,
                    kelamin: validatedData.kelamin,
                    deskripsi: (_b = validatedData.deskripsi) !== null && _b !== void 0 ? _b : null,
                    foto: fotoUrl,
                },
            });
        });
    }
    static getMyAnimals(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                where: {
                    userId,
                    deletedAt: null,
                },
            });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Profil Shelter tidak ditemukan");
            }
            return prisma_client_config_1.default.satwa.findMany({
                where: {
                    shelterId: shelter.id,
                    deletedAt: null,
                },
                include: {
                    shelter: true,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
        });
    }
}
exports.SatwaService = SatwaService;
//# sourceMappingURL=satwa.service.js.map