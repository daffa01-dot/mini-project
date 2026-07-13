import prisma from "../configs/prisma-client.config";
import { StatusDonasi } from "@prisma/client";

export class DashboardService {
  
  private static getDateFilter(year?: number, month?: number) {
    if (!year) return {}; 
    
    const start = new Date(year, month ? month - 1 : 0, 1);
    const end = month 
      ? new Date(year, month, 1) 
      : new Date(year + 1, 0, 1);

    return {
      createdAt: {
        gte: start,
        lt: end,
      }
    };
  }

  static async getStats(year?: number, month?: number) {
    const filter = this.getDateFilter(year, month);

    const [totalDonasiResult, totalSatwaTerbantu, totalMitraAktif] = await Promise.all([
      prisma.donasi.aggregate({ 
        _sum: { nominal: true }, 
        where: { status: StatusDonasi.DIVERIFIKASI, ...filter } 
      }),
      prisma.satwa.count({ 
        where: { status: { in: ["TERSEDIA", "DIADOPSI"] }, ...filter } 
      }),
      prisma.shelter.count({ 
        where: { isAktif: true, ...filter } 
      }),
    ]);

    return {
      totalDonasi: totalDonasiResult._sum.nominal || 0,
      satwaTerbantu: totalSatwaTerbantu,
      mitraAktif: totalMitraAktif,
    };
  }

  static async getShelterStats(shelterId: string, year?: number, month?: number) {
    const filter = this.getDateFilter(year, month);
    
    const result = await prisma.donasi.aggregate({
      _sum: { nominal: true },
      where: { 
        shelterId: shelterId, 
        status: StatusDonasi.DIVERIFIKASI,
        ...filter
      },
    });

    return {
      totalDonasi: result._sum.nominal || 0,
    };
  }

  static async getDonaturStats(donaturId: string, year?: number, month?: number) {
    const filter = this.getDateFilter(year, month);
    
    const result = await prisma.donasi.aggregate({
      _sum: { nominal: true },
      where: { 
        donaturId: donaturId, 
        status: StatusDonasi.DIVERIFIKASI,
        ...filter
      },
    });

    return {
      totalDonasi: result._sum.nominal || 0,
    };
  }
}