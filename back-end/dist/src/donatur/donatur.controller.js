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
exports.DonaturController = void 0;
const donatur_services_1 = require("./donatur-services");
const http_status_codes_1 = require("http-status-codes");
class DonaturController {
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield donatur_services_1.DonaturService.register({ body: req.body });
            res.status(http_status_codes_1.StatusCodes.CREATED).json({
                success: true,
                message: "Register donatur successful",
                data,
            });
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { safeUser, token } = yield donatur_services_1.DonaturService.login({ body: req.body });
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                message: "Login donatur successful",
                data: safeUser,
            });
        });
    }
    static getProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = ((_a = res.locals.payload) === null || _a === void 0 ? void 0 : _a.id) || "";
                if (!userId) {
                    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
                        success: false,
                        message: "Invalid or expired token session",
                        data: null,
                    });
                }
                const profile = yield donatur_services_1.DonaturService.getProfile(userId);
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Get profile donatur successful",
                    data: profile,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getAllUsersDummy(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                message: "Get all users dummy successful",
                data: [],
            });
        });
    }
}
exports.DonaturController = DonaturController;
//# sourceMappingURL=donatur.controller.js.map