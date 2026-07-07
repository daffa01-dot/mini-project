import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';

// 1. Tentukan lokasi folder penyimpanan bukti transfer
const uploadDir = path.join(process.cwd(), 'public/uploads/resi');

// Membuat folder otomatis jika belum ada di dalam project
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 2. Atur cara penamaan file unik biar tidak tabrakan antar donatur
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, uploadDir);
  },
  filename: (req: Request, file: Express.Multer.File, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `resi-${uniqueSuffix}${fileExtension}`);
  }
});

// 3. Filter keamanan agar hanya file gambar murni yang lolos
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Format file tidak valid. Hanya boleh .jpg, .jpeg, .png') as any);
  }
};

// 4. Gabungkan semuanya ke dalam satu variabel bernama 'upload' lalu di-export
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // Batasi ukuran maksimal 2MB
  }
});