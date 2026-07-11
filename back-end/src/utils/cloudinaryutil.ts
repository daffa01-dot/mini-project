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
  // ORIGINAL: keep signature for backward compatibility (returns secure_url)
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

  // NEW: upload and return metadata (secure url + public_id)
  static async uploadBufferWithMeta(fileBuffer: Buffer, folder: string): Promise<{ secureUrl: string; publicId: string }>{
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: folder },
        (error, result: any) => {
          if (error || !result) {
            return reject(new ResponseError(StatusCodes.INTERNAL_SERVER_ERROR, "Gagal upload gambar"));
          }
          resolve({ secureUrl: result.secure_url, publicId: result.public_id });
        }
      );
      uploadStream.end(fileBuffer);
    });
  }

  // NEW: delete by public_id (preferred). Returns true if deletion reported success.
  static async deleteByPublicId(publicId: string): Promise<boolean> {
    try {
      const result: any = await cloudinary.uploader.destroy(publicId);
      // cloudinary returns { result: 'ok' } when successful
      return result && (result.result === 'ok' || result.result === 'not found');
    } catch (err) {
      console.error('[Cloudinary Delete Error]', err);
      return false;
    }
  }

  // NEW: delete by secure URL - extracts public_id then deletes
  static async deleteByUrl(secureUrl: string): Promise<boolean> {
    try {
      if (!secureUrl) return false;
      // Extract public_id by removing extensions and folders after cloud name
      // Example: https://res.cloudinary.com/<cloud>/image/upload/v123456789/folder/name.jpg
      const parts = secureUrl.split('/');
      // public_id is everything after 'upload/' without file extension
      const uploadIndex = parts.findIndex(p => p === 'upload');
      if (uploadIndex === -1) return false;
      const publicIdWithVersionAndPath = parts.slice(uploadIndex + 1).join('/');
      // remove version prefix like v123456789/
      const publicIdParts = publicIdWithVersionAndPath.split('/');
      if (publicIdParts.length > 0 && publicIdParts[0] && publicIdParts[0].match(/^v\d+$/)) {
        publicIdParts.shift();
      }
      const last = publicIdParts.join('/');
      const publicId = last.replace(/\.[^.]+$/, ''); // strip extension
      return await CloudinaryUtil.deleteByPublicId(publicId);
    } catch (err) {
      console.error('[Cloudinary DeleteByUrl Error]', err);
      return false;
    }
  }
}