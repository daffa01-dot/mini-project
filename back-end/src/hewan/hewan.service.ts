import { PrismaClient } from "@prisma/client";
import { hewanValidation } from "../validation/hewan.validation";
import { CloudinaryUtil } from "../utils/cloudinaryutil";
import { ResponseError } from "../utils/response-error.util";
import { StatusCodes } from "http-status-codes";

const prisma = new PrismaClient();

export class hewanService {
  static async create(
    userId: string,
    payload: any,
    file?: Express.Multer.File,
  ) {
    const validatedData = hewanValidation.CREATE.parse({ body: payload }).body;

    const shelter = await prisma.shelter.findUnique({
      where: { userId: userId },
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

    const newhewan = await prisma.hewan.create({
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
      },
    });

    return newhewan;
  }
}

// 1. READ ALL (Only fetch active animals)
export const getAllHewan = async () => {
  return await prisma.hewan.findMany({
    where: {
      deletedAt: null 
    },
    include: {
      shelter: true // This automatically pulls the shelter info for the frontend cards!
    }
  });
};

// 2. READ ONE (Detail page)
export const getHewanById = async (id: string) => {
  const hewan = await prisma.hewan.findUnique({
    where: { id },
    include: { shelter: true }
  });
  
  if (!hewan || hewan.deletedAt) {
    throw new Error("Hewan not found");
  }
  return hewan;
};

// 3. UPDATE
export const updateHewan = async (id: string, data: any) => {
  // Check if it exists first
  await getHewanById(id); 

  return await prisma.hewan.update({
    where: { id },
    data: data
  });
};

// 4. DELETE (Soft Delete - preserves donation history!)
export const deleteHewan = async (id: string) => {
  await getHewanById(id);

  return await prisma.hewan.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
};
