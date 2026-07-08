import prisma from "../configs/prisma-client.config";
import { StatusCodes } from "http-status-codes";

export class LaporanService {
  static async createLaporan(data: {
    judul: string;
    deskripsi: string;
    satwaId: string;
    fotoUrl: string;
    userPayload: any;
  }) {
    const { judul, deskripsi, satwaId, fotoUrl, userPayload } = data;

    // 1. Validasi apakah satwanya ada di DB
    const satwa = await (prisma as any).satwa.findUnique({
      where: { id: satwaId },
    });

    if (!satwa) {
      throw new Error("Data satwa tidak ditemukan");
    }

    if (userPayload.role === "SHELTER") {
      // 1. Cari data shelter asli di DB berdasarkan userId yang dibawa token (userPayload.id)
      const userShelter = await (prisma as any).shelter.findUnique({
        where: { userId: userPayload.id },
      });

      if (!userShelter) {
        throw new Error("Data shelter Anda tidak ditemukan di sistem.");
      }

      const idShelterSatwa = String(satwa.shelterId).trim().toLowerCase();
      const idShelterUser = String(userShelter.id).trim().toLowerCase(); // 🟢 Menggunakan ID Shelter asli dari DB

      if (idShelterSatwa !== idShelterUser) {
        throw new Error(
          `Anda tidak memiliki hak akses untuk membuat laporan pada satwa di shelter lain.`,
        );
      }
    }
    return await (prisma as any).laporan.create({
      data: {
        judul,
        deskripsi,
        foto: fotoUrl,
        satwaId,
      },
    });
  }

  static async getLaporanBySatwa(satwaId: string) {
    return await (prisma as any).laporan.findMany({
      where: { satwaId },
      orderBy: { createdAt: "desc" },
    });
  }
}
