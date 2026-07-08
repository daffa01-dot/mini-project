import { Router } from "express";
import { LaporanController } from "./laporan.controler"; 
import { AuthMiddleware } from "../middlewares/auth.middleware";
// 1. PERBAIKAN: Import MulterMiddleware berbentuk Class (bukan variabel 'upload' lagi)
import { MulterMiddleware } from "../middlewares/multerMiddleware";
import { Role } from "@prisma/client";

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const laporanRouter = Router();

const auth = AuthMiddleware.authenticated;

const authorizeStaff = AuthMiddleware.authorized([
  Role.SUPER_ADMIN,
  Role.SHELTER,
]);

// 2. PERBAIKAN: Buat instansiasi khusus untuk laporan menggunakan 'memoryStorage' dengan limit file 5MB
const laporanUpload = new MulterMiddleware('memoryStorage').upload(5 * 1024 * 1024);

laporanRouter.post(
  "/",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SUPER_ADMIN, Role.SHELTER]),
  // 3. PERBAIKAN: Ganti variabel lama 'upload' menjadi 'laporanUpload'
  laporanUpload.single("fotoSatwa"),
  LaporanController.create,
);

laporanRouter.get("/:satwaId", LaporanController.getBySatwa);

export default laporanRouter;
