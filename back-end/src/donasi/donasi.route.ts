import { Request, Response, NextFunction, Router } from "express";
import { DonasiController } from "./donasi.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { MulterMiddleware } from "../middlewares/multerMiddleware";

const router = Router();

// Ambil secret key dari file .env proyek Anda
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Panggil fungsi authenticated
const auth = AuthMiddleware.authenticated(JWT_SECRET);

// RBAC: Ambil middleware otorisasi role
// Sesuaikan dengan nama method di class AuthMiddleware Anda (e.g., authorized, authorize)
const authorizeShelterOrAdmin = AuthMiddleware.authorized(["SUPER_ADMIN", "SHELTER"]);

// File Upload: Harus 'memoryStorage' untuk Cloudinary
const donasiUpload = new MulterMiddleware('memoryStorage').upload(2 * 1024 * 1024);

// =========================================================================
// REGISTER ENDPOINTS
// =========================================================================

router.post("/checkout", auth, DonasiController.checkout);

router.patch(
  "/:donasiId/upload-bukti",
  auth,
  donasiUpload.single("buktiResi"),
  DonasiController.uploadBukti
);

router.patch(
  "/:donasiId/verifikasi", 
  auth, 
  authorizeShelterOrAdmin, 
  DonasiController.verifikasi
);

router.get("/riwayat", auth, (req: Request, res: Response, next: NextFunction) => {
    // Middleware logging opsional sebelum masuk controller
    console.log("MASUK KE ROUTE RIWAYAT");
    next();
}, DonasiController.getRiwayat);

router.delete(
  "/:donasiId",
  auth,
  authorizeShelterOrAdmin,
  DonasiController.deleteDonasi
);

export default router;