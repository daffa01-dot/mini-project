import prisma from "../configs/prisma-client.config";
import { StatusCodes } from "http-status-codes";
import { ResponseError } from "../utils/response-error.util";

export class ShelterService {
  // 1. GET ALL SHELTER (Dengan Fitur Search Nama & Filter Kota)
  static async getAllShelters(filters: { search?: string; kota?: string }) {
    const { search, kota } = filters;

    // Build query dinamis untuk Prisma
    const whereQuery: any = {
      isAktif: true, // Wajib aktif sesuai PRD halaman 4
    };

    // Jika ada filter kota (e.g. ?kota=Jakarta)
    if (kota) {
      whereQuery.kota = {
        equals: kota,
        mode: "insensitive", // Ga masalah huruf besar/kecil
      };
    }

    // Jika ada search nama (e.g. ?search=panti)
    if (search) {
      whereQuery.namaShelter = {
        contains: search,
        mode: "insensitive",
      };
    }

    // Ambil data shelter beserta hitungan jumlah satwa di dalamnya
    return await (prisma as any).shelter.findMany({
      where: whereQuery,
      select: {
        id: true,
        namaShelter: true,
        kota: true,
        fotoBanner: true,
        alamatLengkap: true,
        _count: {
          select: { satwa: true }, // Menghitung jumlah hewan yang diasuh secara real-time
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // 2. GET DETAIL SHELTER BY ID (Include Daftar Satwa di Dalamnya)
  static async getShelterById(id: string) {
    const shelter = await (prisma as any).shelter.findUnique({
      where: { id },
      include: {
        satwa: {
          where: {
            status: "TERSEDIA", // Hanya tampilkan satwa yang butuh asuh/adopsi
          },
        },
      },
    });

    if (!shelter) {
      throw new ResponseError(StatusCodes.NOT_FOUND, "Shelter tidak ditemukan");
    }

    return shelter;
  }
}