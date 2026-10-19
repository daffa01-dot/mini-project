import { Router } from "express";
import { DonasiController } from "./donasi.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
// 1. PERBAIKAN: Import MulterMiddleware berbentuk Class (bukan variabel 'upload' lagi)
import { MulterMiddleware } from "../middlewares/multerMiddleware";
import { validate } from "../validation/validate";
import { DonasiValidation } from "../validation/donasi.validation";

const router = Router();

// Ambil secret key dari file .env proyek Anda (atau sesuaikan dengan string JWT secret Anda)
const JWT_SECRET = process.env.JWT_SECRET_KEY || "secret_super_aman";

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
const uploadReceipt = multerMiddleware.upload(5 * 1024 * 1024);

// =========================================================================
// REGISTER ENDPOINTS
// =========================================================================

router.post("/checkout", auth, AuthMiddleware.authorized(["DONATUR"]), validate(DonasiValidation.CHECKOUT), DonasiController.checkout);

// Endpoint 2: Upload Bukti (Hanya user yang sudah login/authenticated)
router.patch(
  "/:donasiId/upload-bukti",
  auth,
  uploadReceipt.single("buktiResi"),

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
