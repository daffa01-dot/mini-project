import { SatwaValidation } from "../validation/satwa.validation";
import { CloudinaryUtil } from "../utils/cloudinaryutil";
import { ResponseError } from "../utils/response-error.util";
import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";
import { Prisma } from "@prisma/client";

export class SatwaService {
  static async getAllSatwa() {
    return await prisma.satwa.findMany({
      where: { deletedAt: null },
      include: { shelter: true },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getSatwaById(id: string) {
    const satwa = await prisma.satwa.findFirst({
      where: { id, deletedAt: null },
      include: { shelter: true },
    });
    if (!satwa)
      throw new ResponseError(StatusCodes.NOT_FOUND, "Satwa tidak ditemukan");
    return satwa;
  }

  static async updateSatwa(
    userId: string,
    satwaId: string,
    payload: any,
    file?: Express.Multer.File,
  ) {
    const validatedData = SatwaValidation.UPDATE.parse({
      body: payload,
    }).body;
    // 1. Get the shelter belonging to the user
    const shelter = await prisma.shelter.findFirst({
      where: {
        userId,
        deletedAt: null,
      },
    });
    if (!shelter)
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Profil Shelter tidak ditemukan",
      );

    // 2. Find the satwa and check if it belongs to this shelter
    const satwa = await prisma.satwa.findFirst({
      where: { id: satwaId, shelterId: shelter.id, deletedAt: null },
    });

    if (!satwa) {
      throw new ResponseError(
        StatusCodes.FORBIDDEN,
        "Anda tidak memiliki akses ke satwa ini",
      );
    }
    let fotoUrl = satwa.foto;

    if (file) {
      fotoUrl = await CloudinaryUtil.uploadBuffer(file.buffer, "hewan_photos");
    }

    // Build update data
    const updateData: Prisma.SatwaUpdateInput = Object.fromEntries(
      Object.entries({
        ...validatedData,
        foto: fotoUrl,
      }).filter(([, value]) => value !== undefined),
    );
    // Update
    console.log("validatedData:", validatedData);
    console.log("updateData:", updateData);
    console.log("BEFORE");

    const result = await prisma.satwa.update({
      where: {
        id: satwaId,
      },
      data: updateData,
    });

    console.log("RESULT");
    console.log(result);

    return result;
  }
  static async deleteSatwa(userId: string, satwaId: string) {
    const shelter = await prisma.shelter.findFirst({ where: { userId } });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Profil Shelter tidak ditemukan",
      );
    }

    const satwa = await prisma.satwa.findFirst({
      where: {
        id: satwaId as string,
        shelterId: shelter.id,
      },
    });

    if (!satwa) {
      throw new ResponseError(
        StatusCodes.FORBIDDEN,
        "Anda tidak memiliki akses ke satwa ini",
      );
    }

    return await prisma.satwa.update({
      where: { id: satwaId as string },
      data: { deletedAt: new Date() },
    });
  }

  static async create(
    userId: string,
    payload: any,
    file?: Express.Multer.File,
  ) {
    const validatedData = SatwaValidation.CREATE.parse({ body: payload }).body;

    const shelter = await prisma.shelter.findFirst({
      where: { userId, deletedAt: null },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Profil Shelter belum dibuat.",
      );
    }

    let fotoUrl: string | null = null;
    if (file) {
      fotoUrl = await CloudinaryUtil.uploadBuffer(file.buffer, "hewan_photos");
    }

    return await prisma.satwa.create({
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
  }
  static async getMyAnimals(userId: string) {
    const shelter = await prisma.shelter.findFirst({
      where: {
        userId,
        deletedAt: null,
      },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Profil Shelter tidak ditemukan",
      );
    }

    return prisma.satwa.findMany({
      where: {
        shelterId: shelter.id,
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
}
