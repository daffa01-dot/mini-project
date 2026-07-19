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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const client_1 = require("@prisma/client");
const bycrypt_1 = require("../utils/bycrypt");
const jwt_1 = require("../utils/jwt");
const response_error_util_1 = require("../utils/response-error.util");
const http_status_codes_1 = require("http-status-codes");
const prisma = new client_1.PrismaClient();
class AuthService {
    static register(_a) {
        return __awaiter(this, arguments, void 0, function* ({ body }) {
            const { email, namaLengkap, noWhatsapp, role, namaShelter, deskripsi, kota, alamatLengkap, namaBank, atasNamaRekening, nomorRekening, } = body;
            const existing = yield prisma.user.findUnique({
                where: {
                    email: body.email,
                },
            });
            if (existing) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.CONFLICT, "Email already registered");
            }
            const hashed = yield bycrypt_1.BcryptUtil.hashPassword(body.password);
            // ── DONATUR ──────────────────────────────────────────────
            if (role === client_1.Role.DONATUR) {
                const user = yield prisma.user.create({
                    data: {
                        email,
                        password: hashed,
                        namaLengkap,
                        noWhatsapp: noWhatsapp !== null && noWhatsapp !== void 0 ? noWhatsapp : null,
                        role: client_1.Role.DONATUR,
                    },
                });
                const { password: _ } = user, safeUser = __rest(user, ["password"]);
                return safeUser;
            }
            // ── ADMIN ─────────────────────────────────────────────────
            if (role === client_1.Role.SUPER_ADMIN) {
                const user = yield prisma.user.create({
                    data: {
                        email,
                        password: hashed,
                        namaLengkap,
                        role: client_1.Role.SUPER_ADMIN,
                    },
                });
                const { password: _ } = user, safeUser = __rest(user, ["password"]);
                return safeUser;
            }
            // ── SHELTER ───────────────────────────────────────────────
            if (role === client_1.Role.SHELTER) {
                if (!namaShelter ||
                    !deskripsi ||
                    !kota ||
                    !alamatLengkap ||
                    !namaBank ||
                    !atasNamaRekening ||
                    !nomorRekening) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Semua data profil dan rekening shelter wajib diisi");
                }
                const result = yield prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    const user = yield tx.user.create({
                        data: {
                            email,
                            password: hashed,
                            namaLengkap,
                            noWhatsapp: noWhatsapp !== null && noWhatsapp !== void 0 ? noWhatsapp : null,
                            role: client_1.Role.SHELTER,
                        },
                    });
                    // PERBAIKAN: Menggunakan nested write untuk relasi ShelterBank[cite: 2]
                    const shelter = yield tx.shelter.create({
                        data: {
                            userId: user.id,
                            namaShelter,
                            deskripsi,
                            kota,
                            alamatLengkap,
                            noWhatsapp: noWhatsapp,
                            rekening: {
                                create: {
                                    namaBank,
                                    atasNamaRekening,
                                    nomorRekening,
                                },
                            },
                        },
                    });
                    const { password: _ } = user, safeUser = __rest(user, ["password"]);
                    return Object.assign(Object.assign({}, safeUser), { shelter });
                }));
                return result;
            }
            throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Invalid role");
        });
    }
    // ============================================================
    // LOGIN
    // ============================================================
    static login(_a) {
        return __awaiter(this, arguments, void 0, function* ({ body }) {
            var _b;
            const { email, password } = body;
            const user = yield prisma.user.findFirst({
                where: {
                    email,
                    deletedAt: null,
                },
                include: {
                    shelter: true,
                },
            });
            if (!user) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Email or password is incorrect");
            }
            const isValid = yield bycrypt_1.BcryptUtil.comparePassword(password, user.password);
            if (!isValid) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Email or password is incorrect");
            }
            const shelterId = ((_b = user.shelter) === null || _b === void 0 ? void 0 : _b.id) || null;
            const token = jwt_1.JWTUtil.signToken({
                id: user.id,
                email: user.email,
                role: user.role,
                shelterId: shelterId,
            });
            const { password: _ } = user, safeUser = __rest(user, ["password"]);
            return { safeUser, token };
        });
    }
    static me(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: userId,
                    deletedAt: null,
                },
                select: {
                    id: true,
                    namaLengkap: true,
                    email: true,
                    role: true,
                    noWhatsapp: true,
                    shelter: {
                        select: {
                            id: true,
                            namaShelter: true,
                        },
                    },
                },
            });
            if (!user) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "User tidak ditemukan");
            }
            return user;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map