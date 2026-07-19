"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod = __importStar(require("zod"));
const client_1 = require("@prisma/client");
class AuthValidation {
}
exports.AuthValidation = AuthValidation;
AuthValidation.REGISTER_USER = zod.object({
    body: zod
        .object({
        email: zod
            .string()
            .min(1, "Email is required field")
            .email("Email format is invalid")
            .transform((email) => email.trim().toLocaleLowerCase()),
        password: zod
            .string()
            .min(1, "Password is required field")
            .min(6, "Password must be at least 6 characters"),
        namaLengkap: zod
            .string()
            .min(1, "Full name is required field")
            .max(100, "Full name must be max 100 characters"),
        noWhatsapp: zod
            .string()
            .min(10, "WhatsApp number minimum 10 digits")
            .max(15, "WhatsApp number maximum 15 digits")
            .regex(/^[0-9]+$/, "WhatsApp number must be numeric")
            .optional(),
        role: zod
            .enum([client_1.Role.SUPER_ADMIN, client_1.Role.SHELTER, client_1.Role.DONATUR])
            .describe("Role must be SUPER_ADMIN, SHELTER, or DONATUR"),
        namaShelter: zod.string().min(3).optional(),
        deskripsi: zod.string().min(10).optional(),
        kota: zod.string().optional(),
        alamatLengkap: zod.string().min(10).optional(),
        namaBank: zod.string().optional(),
        atasNamaRekening: zod.string().optional(),
        nomorRekening: zod
            .string()
            .regex(/^[0-9]+$/, "Account number must be numeric")
            .optional(),
    })
        .refine((data) => {
        if (data.role === client_1.Role.SHELTER) {
            return !!(data.namaShelter &&
                data.deskripsi &&
                data.kota &&
                data.alamatLengkap &&
                data.noWhatsapp &&
                data.namaBank &&
                data.atasNamaRekening &&
                data.nomorRekening);
        }
        return true;
    }, { message: "All shelter data is required when role is SHELTER" }),
});
AuthValidation.LOGIN_USER = zod.object({
    body: zod.object({
        email: zod
            .string()
            .min(1, "Email is required field")
            .email("Email format is invalid")
            .transform((email) => email.trim().toLocaleLowerCase()),
        password: zod.string().min(1, "Password is required field"),
    }),
});
//# sourceMappingURL=auth.validation.js.map