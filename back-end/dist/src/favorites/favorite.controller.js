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
exports.FavoritesController = void 0;
const favorite_service_1 = require("./favorite.service");
const http_status_codes_1 = require("http-status-codes");
class FavoritesController {
    static addSatwaFavorite(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = res.locals.payload) === null || _a === void 0 ? void 0 : _a.id;
                const { satwaId } = req.body;
                const result = yield favorite_service_1.FavoritesService.addSatwaFavorite(userId, satwaId);
                res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    success: true,
                    message: 'Satwa bookmark state updated successfully',
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static addShelterFavorite(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = res.locals.payload) === null || _a === void 0 ? void 0 : _a.id;
                const { shelterId } = req.body;
                const result = yield favorite_service_1.FavoritesService.addShelterFavorite(userId, shelterId);
                res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    success: true,
                    message: 'Shelter bookmark state updated successfully',
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static listFavorites(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = res.locals.payload) === null || _a === void 0 ? void 0 : _a.id;
                const result = yield favorite_service_1.FavoritesService.listFavorites(userId);
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: 'Favorite collections catalog fetched successfully',
                    data: result, // Contains separated fields: data.satwa and data.shelters
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static removeFavorite(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = res.locals.payload) === null || _a === void 0 ? void 0 : _a.id;
                const id = req.params.id;
                const result = yield favorite_service_1.FavoritesService.removeFavorite(id, userId);
                res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: 'Favorite collection item detached successfully',
                    data: result,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.FavoritesController = FavoritesController;
//# sourceMappingURL=favorite.controller.js.map