import prisma from "../configs/prisma-client.config";
import { StatusDonasi } from "@prisma/client";

export class DashboardService {
  static async getStats() {
    // Jalankan semua query secara bersamaan (Paralel) biar cepet
    const [totalDonasiResult, totalSatwaTerbantu, totalMitraAktif] = await Promise.all([
      // 1. Hitung total nominal donasi yang DIVERIFIKASI
      (prisma as any).donasi.aggregate({
        _sum: {
          nominal: true,
        },
        where: {
          status: StatusDonasi.DIVERIFIKASI,
        },
      }),

      // 2. Hitung jumlah satwa yang berstatus TERSEDIA atau DIADOPSI
      (prisma as any).satwa.count({
        where: {
          status: {
            in: ["TERSEDIA", "DIADOPSI"],
          },
        },
      }),

      // 3. Hitung jumlah shelter yang aktif
      (prisma as any).shelter.count({
        where: {
          isAktif: true,
        },
      }),
    ]);

    return {
      totalDonasi: totalDonasiResult._sum.nominal || 0,
      satwaTerbantu: totalSatwaTerbantu,
      mitraAktif: totalMitraAktif,
    };
  }
}