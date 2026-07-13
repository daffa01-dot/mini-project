import prisma from "../configs/prisma-client.config";
import { StatusCodes } from "http-status-codes";
import { ResponseError } from "../utils/response-error.util";
interface UserPayload {
  id: string;
  role: "SUPER_ADMIN" | "SHELTER";
}
export class LaporanService {
  static async createLaporan(data: {
    judul: string;
    deskripsi: string;
    satwaId: string;
    fotoUrl: string;
    userPayload: UserPayload;
  }) {
    const { judul, deskripsi, satwaId, fotoUrl, userPayload } = data;

    const satwa = await prisma.satwa.findFirst({
      where: {
        id: satwaId,
        deletedAt: null,
      },
    });
    if (!satwa) {
      throw new Error("Data satwa tidak ditemukan");
    }

    if (userPayload.role === "SHELTER") {
      const userShelter = await prisma.shelter.findFirst({
        where: {
          userId: userPayload.id,
          deletedAt: null,
        },
      });

      if (!userShelter) {
        throw new Error("Data shelter Anda tidak ditemukan di sistem.");
      }

      const idShelterSatwa = String(satwa.shelterId).trim().toLowerCase();
      const idShelterUser = String(userShelter.id).trim().toLowerCase();

      if (idShelterSatwa !== idShelterUser) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND,
          `Anda tidak memiliki hak akses untuk membuat laporan pada satwa di shelter lain.`,
        );
      }
    }
    return await prisma.laporan.create({
      data: {
        judul,
        deskripsi,
        foto: fotoUrl,
        satwaId,
      },
    });
  }

  static async getLaporanBySatwa(satwaId: string) {
    return await prisma.laporan.findMany({
      where: {
        satwaId,
        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  static async deleteLaporan(id: string, userPayload: UserPayload) {
    const laporan = await prisma.laporan.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        satwa: true,
      },
    });

    if (!laporan) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Laporan tidak ditemukan.",
      );
    }

    if (userPayload.role === "SHELTER") {
      const shelter = await prisma.shelter.findFirst({
        where: {
          userId: userPayload.id,
          deletedAt: null,
        },
      });

      if (!shelter) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND,
          "Shelter tidak ditemukan.",
        );
      }

      if (laporan.satwa.shelterId !== shelter.id) {
        throw new ResponseError(
          StatusCodes.FORBIDDEN,
          "Anda tidak memiliki akses menghapus laporan ini.",
        );
      }
    }

    return await prisma.laporan.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
  static async getDetail(id: string) {
    const laporan = await prisma.laporan.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        satwa: {
          select: {
            id: true,
            nama: true,
            foto: true,
            shelterId: true,
          },
        },
      },
    });

    if (!laporan) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Laporan tidak ditemukan.",
      );
    }

    return laporan;
  }
  static async updateLaporan(data: {
    laporanId: string;
    judul?: string;
    deskripsi?: string;
    fotoUrl?: string;
    userPayload: any;
  }) {
    const { laporanId, judul, deskripsi, fotoUrl, userPayload } = data;

    const laporan = await prisma.laporan.findFirst({
      where: {
        id: laporanId,
        deletedAt: null,
      },
      include: {
        satwa: true,
      },
    });

    if (!laporan) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Laporan tidak ditemukan.",
      );
    }

    if (userPayload.role === "SHELTER") {
      const shelter = await prisma.shelter.findFirst({
        where: {
          userId: userPayload.id,
          deletedAt: null,
        },
      });

      if (!shelter) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND,
          "Shelter tidak ditemukan.",
        );
      }

      if (laporan.satwa.shelterId !== shelter.id) {
        throw new ResponseError(
          StatusCodes.FORBIDDEN,
          "Anda tidak memiliki akses untuk mengubah laporan ini.",
        );
      }
    }

    return await prisma.laporan.update({
      where: {
        id: laporanId,
      },
      data: {
        ...(judul !== undefined && { judul }),
        ...(deskripsi !== undefined && { deskripsi }),
        ...(fotoUrl !== undefined && { foto: fotoUrl }),
      },
    });
  }
}
