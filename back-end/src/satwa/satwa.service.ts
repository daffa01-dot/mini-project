import { SatwaValidation } from "../validation/satwa.validation";
import { CloudinaryUtil } from "../utils/cloudinaryutil";
import { ResponseError } from "../utils/response-error.util";
import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";

export class SatwaService {
  static async getAllSatwa() {
    return await prisma.satwa.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        shelter: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  static async getSatwaById(id: string) {
    const satwa = await prisma.satwa.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        shelter: true,
      },
    });
    if (!satwa) {
      throw new ResponseError(StatusCodes.NOT_FOUND, "Satwa tidak ditemukan");
    }

    return satwa;
  }
  static async updateSatwa(id: string, data: any) {
    const shelter = await prisma.shelter.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    const satwa = await prisma.satwa.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        shelter: true,
      },
    });

    if (!satwa) {
      throw new ResponseError(
        StatusCodes.FORBIDDEN,
        "Anda tidak memiliki akses ke satwa ini",
      );
    }
  }
  static async deleteSatwa(id: string) {
    await this.getSatwaById(id);

    return await prisma.satwa.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
  static async create(
    userId: string,
    payload: any,
    file?: Express.Multer.File,
  ) {
    const validatedData = SatwaValidation.CREATE.parse({ body: payload }).body;

    const shelter = await prisma.shelter.findFirst({
      where: {
        userId,
        deletedAt: null,
      },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Profil Shelter belum dibuat.",
      );
    }

    let fotoUrl = null;
    if (file) {
      fotoUrl = await CloudinaryUtil.uploadBuffer(file.buffer, "hewan_photos");
    }

    const newsatwa = await prisma.satwa.create({
      
        data: {
        shelterId: shelter.id,
        nama: validatedData.nama,
        jenis: validatedData.jenis,
        ras: validatedData.ras ?? null,
        umur: validatedData.umur,
        kelamin: validatedData.kelamin,
        deskripsi: validatedData.deskripsi ?? null,
        foto: fotoUrl,
      },
    
    });


    return newsatwa;
    
  }
}
