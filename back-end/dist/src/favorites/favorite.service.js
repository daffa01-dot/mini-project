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
exports.FavoritesService = void 0;
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
const response_error_util_1 = require("../utils/response-error.util");
const http_status_codes_1 = require("http-status-codes");
class FavoritesService {
    static addSatwaFavorite(userId, satwaId) {
        return __awaiter(this, void 0, void 0, function* () {
            const satwa = yield prisma_client_config_1.default.satwa.findUnique({ where: { id: satwaId } });
            if (!satwa) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Satwa not found');
            }
            const existingBookmark = yield prisma_client_config_1.default.satwaBookmark.findUnique({
                where: {
                    userId_satwaId: {
                        userId,
                        satwaId,
                    },
                },
            });
            if (existingBookmark) {
                return existingBookmark;
            }
            return yield prisma_client_config_1.default.satwaBookmark.create({
                data: {
                    userId,
                    satwaId,
                },
            });
        });
    }
    static addShelterFavorite(userId, shelterId) {
        return __awaiter(this, void 0, void 0, function* () {
            const shelter = yield prisma_client_config_1.default.shelter.findUnique({ where: { id: shelterId } });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Shelter not found');
            }
            const existingBookmark = yield prisma_client_config_1.default.shelterBookmark.findUnique({
                where: {
                    userId_shelterId: {
                        userId,
                        shelterId,
                    },
                },
            });
            if (existingBookmark) {
                return existingBookmark;
            }
            return yield prisma_client_config_1.default.shelterBookmark.create({
                data: {
                    userId,
                    shelterId,
                },
            });
        });
    }
    static listFavorites(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const satwaBookmarks = yield prisma_client_config_1.default.satwaBookmark.findMany({
                where: { userId },
                include: {
                    satwa: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
            const shelterBookmarks = yield prisma_client_config_1.default.shelterBookmark.findMany({
                where: { userId },
                include: {
                    shelter: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
            return {
                satwa: satwaBookmarks.map((b) => b.satwa),
                shelters: shelterBookmarks.map((b) => b.shelter),
            };
        });
    }
    static removeFavorite(bookmarkId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const satwaFav = yield prisma_client_config_1.default.satwaBookmark.findFirst({
                where: { id: bookmarkId, userId },
            });
            if (satwaFav) {
                return yield prisma_client_config_1.default.satwaBookmark.delete({ where: { id: bookmarkId } });
            }
            const shelterFav = yield prisma_client_config_1.default.shelterBookmark.findFirst({
                where: { id: bookmarkId, userId },
            });
            if (shelterFav) {
                return yield prisma_client_config_1.default.shelterBookmark.delete({ where: { id: bookmarkId } });
            }
            throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Favorite not found');
        });
    }
}
exports.FavoritesService = FavoritesService;
//# sourceMappingURL=favorite.service.js.map