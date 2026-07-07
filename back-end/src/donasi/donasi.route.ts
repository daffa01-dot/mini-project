import { Router } from 'express';
import { DonasiController } from './donasi.controler'
import { AuthMiddleware } from '../middlewares/auth.middleware'; 
import { upload } from '../middlewares/uploadMiddleware'

const router = Router();

// Ambil secret key dari file .env proyek Anda (atau sesuaikan dengan string JWT secret Anda)
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Panggil fungsi authenticated() dengan menyertakan secret key-nya
const auth = AuthMiddleware.authenticated(JWT_SECRET);

// =========================================================================
// REGISTER ENDPOINTS
// =========================================================================

// Endpoint 1: Checkout (Hanya user yang sudah login/authenticated)
router.post(
  '/checkout', 
  auth, 
  DonasiController.checkout
);

// Endpoint 2: Upload Bukti (Hanya user yang sudah login/authenticated)
router.patch(
  '/:donasiId/upload-bukti', 
  auth, 
  upload.single('buktiResi'), 
  DonasiController.uploadBukti
);

// Endpoint 3: Verifikasi (Hanya user yang login, Anda bisa tambah authorized() jika butuh batasan Role)
router.patch(
  '/:donasiId/verifikasi', 
  auth, 
  DonasiController.verifikasi
);

export default router;