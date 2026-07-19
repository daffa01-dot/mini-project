"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donasi_controller_1 = require("./donasi.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
// 1. PERBAIKAN: Import MulterMiddleware berbentuk Class (bukan variabel 'upload' lagi)
const multerMiddleware_1 = require("../middlewares/multerMiddleware");
const router = (0, express_1.Router)();
// Ambil secret key dari file .env proyek Anda (atau sesuaikan dengan string JWT secret Anda)
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
// Panggil fungsi authenticated() dengan menyertakan secret key-nya
const auth = auth_middleware_1.AuthMiddleware.authenticated(JWT_SECRET);
// 🛠️ PERBAIKAN KRITIS (RBAC): Ambil middleware otorisasi role dari AuthMiddleware Anda
// Sesuaikan nama fungsinya (misal: 'authorized', 'roleGuard', atau 'authorize')
const authorizeShelterOrAdmin = auth_middleware_1.AuthMiddleware.authorized([
    "SUPER_ADMIN",
    "SHELTER",
]);
// 2. PERBAIKAN: Buat instansiasi khusus untuk donasi menggunakan 'diskStorage' dengan batas file 2MB
const multerMiddleware = new multerMiddleware_1.MulterMiddleware();
// =========================================================================
// REGISTER ENDPOINTS
// =========================================================================
router.post("/checkout", auth, donasi_controller_1.DonasiController.checkout);
// Endpoint 2: Upload Bukti (Hanya user yang sudah login/authenticated)
router.patch("/:donasiId/upload-bukti", auth, 
// 3. PERBAIKAN: Ganti variabel lama 'upload' menjadi 'donasiUpload'
multerMiddleware_1.uploadImage.single("buktiResi"), donasi_controller_1.DonasiController.uploadBukti);
// 🔴 REVISI UTAMA: Tambahkan 'authorizeShelterOrAdmin' setelah 'auth'
// Ini mencegah Donatur biasa atau pihak luar menembak API verifikasi untuk mengubah status donasi secara ilegal
router.patch("/:donasiId/verifikasi", auth, authorizeShelterOrAdmin, donasi_controller_1.DonasiController.verifikasi);
// PERBAIKAN DI SINI: Tambahkan 'auth' agar token donatur diekstrak sebelum ditarik datanya
router.get("/riwayat", auth, donasi_controller_1.DonasiController.getRiwayat);
router.get("/:donasiId", auth, donasi_controller_1.DonasiController.getById);
router.delete("/:donasiId", auth, authorizeShelterOrAdmin, donasi_controller_1.DonasiController.deleteDonasi);
exports.default = router;
//# sourceMappingURL=donasi.route.js.map