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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonaturService = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const donatur_validation_1 = require("../validation/donatur-validation");
const jwt_1 = require("../utils/jwt");
const response_error_util_1 = require("../utils/response-error.util");
const http_status_codes_1 = require("http-status-codes");
const prisma = new client_1.PrismaClient();
const SALT_ROUNDS = 10;
class DonaturService {
    static register(_a) {
        return __awaiter(this, arguments, void 0, function* ({ body }) {
            const validatedData = donatur_validation_1.DonaturValidation.REGISTER.parse({ body });
            const { email, password, namaLengkap, noWhatsapp } = validatedData.body;
            const existing = yield prisma.user.findUnique({ where: { email } });
            if (existing) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.CONFLICT, 'Email already registered');
            }
            const hashed = yield bcrypt_1.default.hash(password, SALT_ROUNDS);
            const user = yield prisma.user.create({
                data: {
                    email,
                    password: hashed,
                    namaLengkap,
                    noWhatsapp: noWhatsapp !== null && noWhatsapp !== void 0 ? noWhatsapp : null,
                    role: client_1.Role.DONATUR
                }
            });
            const { password: _ } = user, safeUser = __rest(user, ["password"]);
            return safeUser;
        });
    }
    static login(_a) {
        return __awaiter(this, arguments, void 0, function* ({ body }) {
            const validatedData = donatur_validation_1.DonaturValidation.LOGIN.parse({ body });
            const { email, password } = validatedData.body;
            const user = yield prisma.user.findUnique({ where: { email } });
            if (!user || user.role !== client_1.Role.DONATUR) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Email or password is incorrect');
            }
            const isValidPassword = yield bcrypt_1.default.compare(password, user.password);
            if (!isValidPassword) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.UNAUTHORIZED, 'Email or password is incorrect');
            }
            const token = jwt_1.JWTUtil.signToken({ id: user.id, email: user.email, role: user.role });
            const { password: _ } = user, safeUser = __rest(user, ["password"]);
            return { safeUser, token };
        });
    }
    static getProfile(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    email: true,
                    namaLengkap: true,
                    noWhatsapp: true,
                    role: true,
                    createdAt: true
                }
            });
            if (!user) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, 'Donatur profile not found');
            }
            return user;
        });
    }
    static getStats(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const stats = yield prisma.donasi.aggregate({
                where: {
                    donaturId: userId,
                    status: "DIVERIFIKASI"
                },
                _sum: { nominal: true },
                _count: { id: true },
            });
            return {
                totalNominal: stats._sum.nominal || 0,
                totalTransaksi: stats._count.id || 0
            };
        });
    }
}
exports.DonaturService = DonaturService;
//# sourceMappingURL=donatur-services.js.map