"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatwaValidation = void 0;
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
class SatwaValidation {
}
exports.SatwaValidation = SatwaValidation;
SatwaValidation.CREATE = zod_1.z.object({
    body: zod_1.z.object({
        nama: zod_1.z
            .string()
            .min(3, "Nama satwa minimal 3 karakter")
            .max(100, "Nama satwa maksimal 100 karakter"),
        jenis: zod_1.z.nativeEnum(client_1.JenisSatwa, {
            message: "Jenis satwa tidak valid",
        }),
        ras: zod_1.z
            .string()
            .max(100, "Ras maksimal 100 karakter")
            .optional(),
        umur: zod_1.z.coerce
            .number()
            .int("Umur harus berupa angka bulat")
            .min(0, "Umur tidak boleh negatif"),
        kelamin: zod_1.z.nativeEnum(client_1.KelaminSatwa, {
            message: "Kelamin tidak valid",
        }),
        deskripsi: zod_1.z
            .string()
            .max(1000, "Deskripsi maksimal 1000 karakter")
            .optional(),
    }),
});
SatwaValidation.UPDATE = zod_1.z.object({
    body: zod_1.z.object({
        nama: zod_1.z
            .string()
            .min(3, "Nama satwa minimal 3 karakter")
            .max(100)
            .optional(),
        jenis: zod_1.z
            .nativeEnum(client_1.JenisSatwa)
            .optional(),
        ras: zod_1.z
            .string()
            .max(100)
            .optional(),
        umur: zod_1.z.coerce
            .number()
            .int()
            .min(0)
            .optional(),
        kelamin: zod_1.z
            .nativeEnum(client_1.KelaminSatwa)
            .optional(),
        deskripsi: zod_1.z
            .string()
            .max(1000)
            .optional(),
        status: zod_1.z
            .nativeEnum(client_1.StatusSatwa)
            .optional(),
    }),
});
//# sourceMappingURL=satwa.validation.js.map