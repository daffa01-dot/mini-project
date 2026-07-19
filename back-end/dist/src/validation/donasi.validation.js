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
exports.DonasiValidation = exports.verifikasiDonasiFormSchema = exports.checkoutDonasiFormSchema = void 0;
const z = __importStar(require("zod"));
exports.checkoutDonasiFormSchema = z.object({
    nominal: z.coerce
        .number({
        message: "Nominal donasi harus berupa angka murni",
    })
        .min(10000, 'Minimal melakukan donasi adalah Rp 10.000'),
    catatan: z.string().trim().optional(),
    satwaId: z
        .string()
        .uuid('Format ID Satwa harus berupa UUID yang valid')
        .optional()
        .nullable(),
    shelterId: z
        .string()
        .uuid('Format ID Shelter harus berupa UUID yang valid')
        .optional()
        .nullable(),
});
exports.verifikasiDonasiFormSchema = z.object({
    statusBaru: z.enum(["DIVERIFIKASI", "DITOLAK"], {
        message: "Status baru wajib diisi dengan DIVERIFIKASI atau DITOLAK"
    }),
    alasanDitolak: z.string().trim().optional(),
});
class DonasiValidation {
}
exports.DonasiValidation = DonasiValidation;
DonasiValidation.CHECKOUT = z.object({
    body: exports.checkoutDonasiFormSchema,
});
DonasiValidation.VERIFIKASI = z.object({
    params: z.object({
        donasiId: z.string().uuid('Format ID Donasi di parameter URL harus berupa UUID yang valid'),
    }),
    body: exports.verifikasiDonasiFormSchema,
});
//# sourceMappingURL=donasi.validation.js.map