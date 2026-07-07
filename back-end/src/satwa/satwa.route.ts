import { Router } from 'express';
import { SatwaController } from './satwa.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { uploadImage } from '../middlewares/multer.middleware';
import { Role } from '@prisma/client';

// Route: POST /api/v1/satwa
// 1. Cek Token -> 2. Cek Role -> 3. Tangkap File 'foto' -> 4. Jalankan Controller
const router = Router();

router.post(
  "/",
  // verifyToken,
  // checkRole([Role.SHELTER]),
  AuthMiddleware.authenticated(""), 
  AuthMiddleware.authorized([Role.SHELTER]),
  uploadImage.single("foto"),
  SatwaController.createSatwa,
);

export default router;
