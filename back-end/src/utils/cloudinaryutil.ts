import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import { ResponseError } from './response-error.util';
import { StatusCodes } from 'http-status-codes';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

export class CloudinaryUtil {
  static async uploadBuffer(fileBuffer: Buffer, folder: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: folder },
        (error, result) => {
          if (error || !result) {
            return reject(new ResponseError(StatusCodes.INTERNAL_SERVER_ERROR, "Gagal upload gambar"));
          }
          resolve(result.secure_url);
        }
      );
      uploadStream.end(fileBuffer);
    });
  }
}