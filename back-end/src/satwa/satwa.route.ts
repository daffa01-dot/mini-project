import { Router } from "express";
import { SatwaController } from "./satwa.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";

// 1. GANTI IMPORT INI: Ambil MulterMiddleware (bukan upload)
import { MulterMiddleware } from "../middlewares/multerMiddleware"; 

const router = Router();

// 2. BUAT INSTANCE BARU: Set ke memoryStorage untuk Cloudinary dengan limit 5MB
const satwaUpload = new MulterMiddleware('memoryStorage').upload(5 * 1024 * 1024);

router.post(
  "/",
  AuthMiddleware.authenticated(""),
  AuthMiddleware.authorized([Role.SHELTER]),
  // 3. GANTI DI SINI: Gunakan variabel satwaUpload yang baru dibuat
  satwaUpload.single("foto"), 
  SatwaController.createSatwa,
);

export default router;
