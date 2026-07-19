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
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const http_status_codes_1 = require("http-status-codes");
const response_error_util_1 = require("../utils/response-error.util");
const client_1 = require("@prisma/client");
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
class AuthController {
    static register_user(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                if (body.role === client_1.Role.DONATUR) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Registration for Donatur is not allowed on this endpoint");
                }
                const safeUser = yield auth_service_1.AuthService.register({ body });
                return res.status(http_status_codes_1.StatusCodes.CREATED).json({
                    success: true,
                    message: "Register Admin/Shelter successful",
                    data: safeUser,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { safeUser, token } = yield auth_service_1.AuthService.login({ body });
                res.cookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    maxAge: 7 * 24 * 60 * 60 * 1000,
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Login berhasil",
                    data: {
                        token,
                        user: safeUser,
                    },
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.clearCookie("token", {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "Mini-Project",
                    sameSite: "strict",
                });
                return res.status(http_status_codes_1.StatusCodes.OK).json({
                    success: true,
                    message: "Logout successful. Token session cleared.",
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static me(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = res.locals.payload;
            const user = yield prisma_client_config_1.default.user.findUnique({
                where: { id: payload.id },
                select: {
                    id: true,
                    namaLengkap: true,
                    email: true,
                    role: true,
                },
            });
            return res.json({
                success: true,
                data: user,
            });
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map