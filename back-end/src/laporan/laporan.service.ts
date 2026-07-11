import prisma from "../configs/prisma-client.config";
import { StatusCodes } from "http-status-codes";

export class LaporanService {
  static async createLaporan(data: {
    judul: string;
    deskripsi: string;
    satwaId: string;
    fotoUrl: string;
    fotoPublicId?: string; // NEW: accept cloud public_id
    userPayload: any;
  }) {
    const { judul, deskripsi, satwaId, fotoUrl, fotoPublicId, userPayload } = data;

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
        fotoPublicId: fotoPublicId || null, // NEW: store public_id when available
        satwaId,
      },
    });
  }

  static async getLaporanBySatwa(satwaId: string, page = 1, perPage = 10) {
    const currentPage = Math.max(1, page);
    const currentPerPage = Math.max(1, Math.min(perPage, 100));

    const whereQuery = { satwaId };
    const total = await (prisma as any).laporan.count({ where: whereQuery });
    const laporan = await (prisma as any).laporan.findMany({
      where: whereQuery,
      orderBy: { createdAt: "desc" },
      skip: (currentPage - 1) * currentPerPage,
      take: currentPerPage,
    });

    const totalPages = currentPerPage > 0 ? Math.ceil(total / currentPerPage) : 0;

    return {
      data: laporan,
      meta: {
        total,
        page: currentPage,
        perPage: currentPerPage,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
      },
    };
  }
}
