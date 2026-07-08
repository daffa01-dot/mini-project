import { Request } from 'express';
import multer, { FileFilterCallback, Multer, StorageEngine } from 'multer';
import path from 'path';
import fs from 'fs';
import { ResponseError } from '../utils/response-error.util'; // Pastikan path ini sesuai di project Anda
import { StatusCodes } from 'http-status-codes';

export class MulterMiddleware {
  private allowedExtensions: string[] = ['.jpg', '.jpeg', '.png'];
  private storageType: 'diskStorage' | 'memoryStorage' = 'diskStorage';
  private uploadDir = path.join(process.cwd(), 'public/uploads/resi');

  constructor(storageType?: 'diskStorage' | 'memoryStorage') {
    if (storageType) {
      this.storageType = storageType;
    }
    
    // Membuat folder otomatis jika memilih diskStorage dan folder belum ada
    if (this.storageType === 'diskStorage' && !fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  private storage(): StorageEngine {
    if (this.storageType === 'diskStorage') {
      return multer.diskStorage({
        destination: (req: Request, file: Express.Multer.File, cb) => {
          cb(null, this.uploadDir);
        },
        filename: (req: Request, file: Express.Multer.File, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtension = path.extname(file.originalname);
          cb(null, `resi-${uniqueSuffix}${fileExtension}`);
        },
      });
    }
    
    // Jika memoryStorage (untuk Cloudinary), langsung kembalikan tanpa setting destination/filename
    return multer.memoryStorage();
  }

  private fileFilter(
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback,
  ) {
    const ext = path.extname(file.originalname).toLowerCase();

    if (this.allowedExtensions.includes(ext)) {
      return cb(null, true);
    }

    return cb(
      new ResponseError(
        StatusCodes.NOT_ACCEPTABLE,
        `Format file tidak valid untuk ${file.originalname}. Hanya boleh .jpg, .jpeg, .png`,
      ) as any,
    );
  }

  public upload(limitFileSize: number): Multer {
    return multer({
      storage: this.storage(),
      fileFilter: this.fileFilter.bind(this),
      limits: {
        fileSize: limitFileSize,
      },
    });
  }
}
