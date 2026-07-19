import prisma from "../configs/prisma-client.config";
import { StatusCodes } from "http-status-codes";
import { ResponseError } from "../utils/response-error.util";

export class ShelterService {
  static async getAllShelters(filters: { search?: string; kota?: string }) {
    const { search, kota } = filters;

    const whereQuery: any = {
      isAktif: true,
      deletedAt: null,
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

    return await (prisma as any).shelter.findMany({
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
    });
  }

  static async getShelterById(id: string) {
    const shelter = await prisma.shelter.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        satwa: {
          where: {
            status: "TERSEDIA",
            deletedAt: null,
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
