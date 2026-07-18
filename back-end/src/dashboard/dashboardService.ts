import prisma from "../configs/prisma-client.config";
import { Status } from "@prisma/client";

export class DashboardService {
  private static getDateFilter(year?: number, month?: number) {
    if (!year) return {};

    const start = new Date(year, month ? month - 1 : 0, 1);
    const end = month ? new Date(year, month, 1) : new Date(year + 1, 0, 1);

    return {
      createdAt: {
        gte: start,
        lt: end,
      },
    };
  }

  static async getShelterDashboard(
    shelterId: string,
    year?: number,
    month?: number,
  ) {
    const filter = this.getDateFilter(year, month);

    const [
      totalSatwa,
      totalDonasi,
      totalPending,
      totalLaporan,
      recentDonations,
    ] = await Promise.all([
      prisma.satwa.count({
        where: {
          shelterId,
          deletedAt: null,
        },
      }),

      prisma.donasi.aggregate({
        _sum: {
          nominal: true,
        },

        where: {
          shelterId,
          deletedAt: null,
          status: Status.DIVERIFIKASI,
          ...filter,
        },
      }),

      prisma.donasi.count({
        where: {
          shelterId,
          deletedAt: null,
          status: Status.MENUNGGU,
          ...filter,
        },
      }),

      prisma.laporan.count({
        where: {
          satwa: {
            shelterId,
          },

          deletedAt: null,
        },
      }),

      prisma.donasi.findMany({
        where: {
          shelterId,
          deletedAt: null,
        },

        include: {
          donatur: true,
          satwa: true,
        },

        orderBy: {
          createdAt: "desc",
        },

        take: 5,
      }),
    ]);

    return {
      summary: {
        totalSatwa,

        totalDonasi: totalDonasi._sum.nominal ?? 0,

        totalPending,

        totalLaporan,
      },

      recentDonations,
    };
  }
  static async getDonorDashboard(
    donaturId: string,
    year?: number,
    month?: number,
  ) {
    const filter = this.getDateFilter(year, month);

    const [totalNominal, jumlahDonasi, pending, verified, recentDonations] =
      await Promise.all([
        prisma.donasi.aggregate({
          _sum: {
            nominal: true,
          },
          where: {
            donaturId,
            deletedAt: null,
            status: Status.DIVERIFIKASI,
            ...filter,
          },
        }),

        prisma.donasi.count({
          where: {
            donaturId,
            deletedAt: null,
            ...filter,
          },
        }),

        prisma.donasi.count({
          where: {
            donaturId,
            deletedAt: null,
            status: Status.MENUNGGU,
            ...filter,
          },
        }),

        prisma.donasi.count({
          where: {
            donaturId,
            deletedAt: null,
            status: Status.DIVERIFIKASI,
            ...filter,
          },
        }),

        prisma.donasi.findMany({
          where: {
            donaturId,
            deletedAt: null,
          },

          include: {
            satwa: true,
            shelter: true,
            donatur: true,
          },

          orderBy: {
            createdAt: "desc",
          },

          take: 5,
        }),
      ]);

    return {
      summary: {
        totalNominal: totalNominal._sum.nominal ?? 0,
        jumlahDonasi,
        pending,
        verified,
      },

      recentDonations,
    };
  }
  static async getAdminDashboard(
  year?: number,
  month?: number,
) {
  const filter = this.getDateFilter(year, month);

  const [
    totalUser,
    totalShelter,
    totalSatwa,
    totalDonasi,
    recentDonations,
  ] = await Promise.all([
    prisma.user.count({
      where: {
        deletedAt: null,
      },
    }),

    prisma.shelter.count({
      where: {
        deletedAt: null,
      },
    }),

    prisma.satwa.count({
      where: {
        deletedAt: null,
      },
    }),

    prisma.donasi.aggregate({
      _sum: {
        nominal: true,
      },
      where: {
        deletedAt: null,
        status: Status.DIVERIFIKASI,
        ...filter,
      },
    }),

    prisma.donasi.findMany({
      where: {
        deletedAt: null,
        ...filter,
      },

      include: {
        donatur: true,
        shelter: true,
        satwa: true,
      },

      orderBy: {
        createdAt: "desc",
      },

      take: 10,
    }),
  ]);

  return {
    summary: {
      totalUser,
      totalShelter,
      totalSatwa,
      totalDonasi: totalDonasi._sum.nominal ?? 0,
    },

    recentDonations,
  };
}
}
