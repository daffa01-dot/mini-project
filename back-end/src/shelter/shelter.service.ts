import prisma from "../configs/prisma-client.config";
import { StatusCodes } from "http-status-codes";
import { ResponseError } from "../utils/response-error.util";
import { Prisma } from "@prisma/client";

interface ShelterBankPayload {
  namaBank: string;
  nomorRekening: string;
  atasNamaRekening: string;
  isPrimary?: boolean;
}

interface GetAllSheltersProps {
  search?: string;
  kota?: string;
  page?: number;
  perPage?: number;
}

interface PaginationMeta {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export class ShelterService {
  // 1. GET ALL SHELTER (Dengan Fitur Search Nama & Filter Kota dengan Pagination)
  static async getAllShelters(filters: GetAllSheltersProps) {
    const { search, kota, page = 1, perPage = 10 } = filters;
    const currentPage = Math.max(1, page);
    const currentPerPage = Math.max(1, Math.min(perPage, 100));

    // Menghapus type assertion 'any' dengan memanfaatkan input schema type native milik Prisma
    const whereQuery: Prisma.ShelterWhereInput = {
      isAktif: true, 
    };

    if (kota) {
      whereQuery.kota = {
        equals: kota,
        mode: "insensitive",
      };
    }

    if (search) {
      whereQuery.namaShelter = {
        contains: search,
        mode: "insensitive",
      };
    }

    const total = await prisma.shelter.count({ where: whereQuery });
    const shelters = await prisma.shelter.findMany({
      where: whereQuery,
      select: {
        id: true,
        namaShelter: true,
        kota: true,
        fotoBanner: true,
        alamatLengkap: true,
        _count: {
          select: { satwa: true }, 
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (currentPage - 1) * currentPerPage,
      take: currentPerPage,
    });

    const totalPages = currentPerPage > 0 ? Math.ceil(total / currentPerPage) : 0;

    return {
      data: shelters,
      meta: {
        total,
        page: currentPage,
        perPage: currentPerPage,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
      } as PaginationMeta,
    };
  }

  // 2. GET DETAIL SHELTER BY ID (Include Daftar Satwa yang berstatus TERSEDIA)
  static async getShelterById(id: string) {
    const shelter = await (prisma as any).shelter.findUnique({
      where: { id },
      include: {
        satwa: {
          where: {
            status: "TERSEDIA", 
            deteletedAt: null,
          },
        },
      },
    });

    if (!shelter) {
      throw new ResponseError(StatusCodes.NOT_FOUND, "Shelter tidak ditemukan");
    }
    

    return shelter;
  }

  // 3. GET BANK BY SHELTER (Mengambil data rekening aktif)
  static async getRekeningByShelter(shelterId: string) {
    return await prisma.shelterBank.findMany({
      where: {
        shelterId,
        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // 4. CREATE BANK ACCOUNT (Dengan sinkronisasi isPrimary)
  static async createRekening(shelterId: string, payload: ShelterBankPayload) {
    const existingShelter = await prisma.shelter.findUnique({
      where: { id: shelterId },
    });

    if (!existingShelter) {
      throw new ResponseError(StatusCodes.NOT_FOUND, "Shelter tidak ditemukan");
    }

    // Jika rekening baru diset sebagai primary, ubah semua rekening lama menjadi false
    if (payload.isPrimary) {
      await prisma.shelterBank.updateMany({
        where: { shelterId },
        data: { isPrimary: false },
      });
    }

    // Memperbaiki properti payload agar sesuai dengan interface bahasa Indonesia
    return await prisma.shelterBank.create({
      data: {
        shelterId,
        namaBank: payload.namaBank,
        nomorRekening: payload.nomorRekening,
        atasNamaRekening: payload.atasNamaRekening,
        isPrimary: payload.isPrimary ?? false,
      },
    });
  }

  // 5. UPDATE BANK ACCOUNT
  static async updateRekening(rekeningId: string, payload: ShelterBankPayload) {
    const bank = await prisma.shelterBank.findUnique({
      where: { id: rekeningId },
    });

    if (!bank) {
      throw new ResponseError(StatusCodes.NOT_FOUND, "Rekening tidak ditemukan");
    }

    if (payload.isPrimary) {
      await prisma.shelterBank.updateMany({
        where: { shelterId: bank.shelterId },
        data: { isPrimary: false },
      });
    }

    return await prisma.shelterBank.update({
      where: { id: rekeningId },
      data: {
        namaBank: payload.namaBank,
        nomorRekening: payload.nomorRekening,
        atasNamaRekening: payload.atasNamaRekening,
        isPrimary: payload.isPrimary ?? bank.isPrimary,
      },
    });
  }

  // 6. DELETE BANK ACCOUNT (Soft Delete Implementation)
  static async deleteRekening(rekeningId: string) {
    const bank = await prisma.shelterBank.findUnique({
      where: { id: rekeningId },
    });

    if (!bank) {
      throw new ResponseError(StatusCodes.NOT_FOUND, "Rekening tidak ditemukan");
    }

    return await prisma.shelterBank.update({
      where: { id: rekeningId },
      data: { deletedAt: new Date() },
    });
  }
}

