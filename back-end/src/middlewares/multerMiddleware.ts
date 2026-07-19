import { Request } from "express";
import multer, { FileFilterCallback, Multer } from "multer";
import path from "path";
import { ResponseError } from "../utils/response-error.util";
import { StatusCodes } from "http-status-codes";

export const uploadImage = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export class MulterMiddleware {
  private allowedExtensions = [".jpg", ".jpeg", ".png"];

  private fileFilter(
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback,
  ) {
    const ext = path.extname(file.originalname).toLowerCase();

    if (!this.allowedExtensions.includes(ext)) {
      return cb(
        new ResponseError(
          StatusCodes.NOT_ACCEPTABLE,
          `Format file tidak valid untuk ${file.originalname}. Hanya boleh .jpg, .jpeg, .png`,
        ) as any,
      );
    }

    cb(null, true);
  }

  public upload(limitFileSize: number): Multer {
    return multer({
      storage: multer.memoryStorage(),
      fileFilter: this.fileFilter.bind(this),
      limits: {
        fileSize: limitFileSize,
      },
    });
  }
}