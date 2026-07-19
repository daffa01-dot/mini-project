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
exports.ShelterService = void 0;
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
const http_status_codes_1 = require("http-status-codes");
const response_error_util_1 = require("../utils/response-error.util");
class ShelterService {
    static getAllShelters(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search, kota } = filters;
            const whereQuery = {
                isAktif: true,
                deletedAt: null,
            };
            if (kota) {
                whereQuery.kota = {
                    equals: kota,
                    mode: "insensitive",
                };
            }
            if (search) {
                whereQuery.namaShelter = {
                    contains: search,
                    mode: "insensitive",
                };
            }
            return yield prisma_client_config_1.default.shelter.findMany({
                where: whereQuery,
                select: {
                    id: true,
                    namaShelter: true,
                    kota: true,
                    fotoBanner: true,
                    alamatLengkap: true,
                    _count: {
                        select: { satwa: true },
                    },
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
        });
    }
    static getShelterById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                where: {
                    id,
                    deletedAt: null,
                },
                include: {
                    satwa: {
                        where: {
                            status: "TERSEDIA",
                            deletedAt: null,
                        },
                    },
                },
            });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Shelter tidak ditemukan");
            }
            return shelter;
        });
    }
}
exports.ShelterService = ShelterService;
//# sourceMappingURL=shelter.service.js.map