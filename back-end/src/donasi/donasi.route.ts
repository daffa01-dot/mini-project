import { Request, Response, NextFunction, Router } from "express";
import { DonasiController } from "./donasi.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
// 1. PERBAIKAN: Import MulterMiddleware berbentuk Class (bukan variabel 'upload' lagi)
import { MulterMiddleware, uploadImage } from "../middlewares/multerMiddleware";

const router = Router();

// Ambil secret key dari file .env proyek Anda (atau sesuaikan dengan string JWT secret Anda)
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Panggil fungsi authenticated() dengan menyertakan secret key-nya
const auth = AuthMiddleware.authenticated(JWT_SECRET);

// 🛠️ PERBAIKAN KRITIS (RBAC): Ambil middleware otorisasi role dari AuthMiddleware Anda
// Sesuaikan nama fungsinya (misal: 'authorized', 'roleGuard', atau 'authorize')
const authorizeShelterOrAdmin = AuthMiddleware.authorized([
  "SUPER_ADMIN",
  "SHELTER",
]);

// 2. PERBAIKAN: Buat instansiasi khusus untuk donasi menggunakan 'diskStorage' dengan batas file 2MB
const multerMiddleware = new MulterMiddleware();

// =========================================================================
// REGISTER ENDPOINTS
// =========================================================================

router.post("/checkout", auth, DonasiController.checkout);

// Endpoint 2: Upload Bukti (Hanya user yang sudah login/authenticated)
router.patch(
  "/:donasiId/upload-bukti",
  auth,
  // 3. PERBAIKAN: Ganti variabel lama 'upload' menjadi 'donasiUpload'
  uploadImage.single("buktiResi"),

  DonasiController.uploadBukti,
);

// 🔴 REVISI UTAMA: Tambahkan 'authorizeShelterOrAdmin' setelah 'auth'
// Ini mencegah Donatur biasa atau pihak luar menembak API verifikasi untuk mengubah status donasi secara ilegal
router.patch(
  "/:donasiId/verifikasi",
  auth,
  authorizeShelterOrAdmin,
  DonasiController.verifikasi,
);

// PERBAIKAN DI SINI: Tambahkan 'auth' agar token donatur diekstrak sebelum ditarik datanya
router.get("/riwayat", auth, DonasiController.getRiwayat);

router.get("/:donasiId", auth, DonasiController.getById);
router.delete(
  "/:donasiId",
  auth,
  authorizeShelterOrAdmin,
  DonasiController.deleteDonasi,
);

export default router;
