"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLaporanSchema = void 0;
const zod_1 = require("zod");
exports.CreateLaporanSchema = zod_1.z.object({
    judul: zod_1.z.string().min(5, { message: "Judul kabar minimal 5 karakter" }),
    deskripsi: zod_1.z.string().min(10, { message: "Deskripsi update kondisi minimal 10 karakter" }),
    satwaId: zod_1.z.string().min(1, { message: "Target satwa asuhan wajib dipilih" }),
});
//# sourceMappingURL=laporan.validation.js.map