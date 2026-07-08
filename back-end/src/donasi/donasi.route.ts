import { Router } from "express";
import { DonasiController } from "./donasi.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";
// 1. PERBAIKAN: Import MulterMiddleware berbentuk Class (bukan variabel 'upload' lagi)
import { MulterMiddleware } from "../middlewares/multerMiddleware";

const router = Router();

// Ambil secret key dari file .env proyek Anda (atau sesuaikan dengan string JWT secret Anda)
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Panggil fungsi authenticated() dengan menyertakan secret key-nya
const auth = AuthMiddleware.authenticated(JWT_SECRET);

// 2. PERBAIKAN: Buat instansiasi khusus untuk donasi menggunakan 'diskStorage' dengan batas file 2MB
const donasiUpload = new MulterMiddleware('diskStorage').upload(2 * 1024 * 1024);

// =========================================================================
// REGISTER ENDPOINTS
// =========================================================================

router.post("/checkout", auth, DonasiController.checkout);

// Endpoint 2: Upload Bukti (Hanya user yang sudah login/authenticated)
router.patch(
  "/:donasiId/upload-bukti",
  auth,
  // 3. PERBAIKAN: Ganti variabel lama 'upload' menjadi 'donasiUpload'
  donasiUpload.single("buktiResi"),
  DonasiController.uploadBukti,
);

// Endpoint 3: Verifikasi (Hanya user yang login)
router.patch("/:donasiId/verifikasi", auth, DonasiController.verifikasi);

// PERBAIKAN DI SINI: Tambahkan 'auth' agar token donatur diekstrak sebelum ditarik datanya
router.get("/riwayat", auth, DonasiController.getRiwayat);

export default router;
