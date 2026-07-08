import { PrismaClient } from '@prisma/client';
import { SatwaValidation } from '../validation/satwa.validation'
import { CloudinaryUtil } from '../utils/cloudinaryutil';
import { ResponseError } from '../utils/response-error.util';
import { StatusCodes } from 'http-status-codes';

const prisma = new PrismaClient();

export class SatwaService {
  static async create(userId: string, payload: any, file?: Express.Multer.File) {
    const validatedData = SatwaValidation.CREATE.parse({ body: payload }).body;

    const shelter = await prisma.shelter.findUnique({
      where: { userId: userId }
    });

    if (!shelter) {
      throw new ResponseError(StatusCodes.NOT_FOUND, "Profil Shelter belum dibuat.");
    }

    let fotoUrl = null;
    if (file) {
      fotoUrl = await CloudinaryUtil.uploadBuffer(file.buffer, "satwa_photos");
    }

    const newSatwa = await prisma.satwa.create({
      data: {
        shelterId: shelter.id,
        nama: validatedData.nama,
        jenis: validatedData.jenis,
        ras: validatedData.ras ?? null, 
        umur: validatedData.umur,
        kelamin: validatedData.kelamin,
        deskripsi: validatedData.deskripsi ?? null,
        riwayatMedis: validatedData.riwayatMedis ?? null,
        foto: fotoUrl,
      }
    });

    return newSatwa;
  }
}