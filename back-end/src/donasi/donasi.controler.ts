import { NextFunction, Request, Response } from "express";
import { DonasiService } from "./donasi.service";
import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";

type GetRiwayatProps = {
  role: string;
  userId?: string;
  shelterId?: string;
};

export class DonasiController {
  static async checkout(req: Request, res: Response, next: NextFunction) {
    try {
      const donaturId = res.locals.payload?.id || (req as any).user?.id;
      const { nominal, catatan, satwaId, shelterId } = req.body;

      const result = await DonasiService.createCheckout({
        nominal: Number(nominal),
        catatan,
        satwaId,
        shelterId,
        donaturId,
      });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Checkout berhasil, silakan lakukan transfer manual",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async uploadBukti(req: Request, res: Response, next: NextFunction) {
    try {
      const donaturId = res.locals.payload?.id || (req as any).user?.id;
      const donasiId = req.params.donasiId as string;

      const file = (req as any).file;

      if (!file) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "File bukti resi transfer wajib diunggah",
        });
      }

      const buktiResiPath = file.path;

      const result = await DonasiService.uploadBuktiResi({
        donasiId,
        donaturId,
        buktiResiPath,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: result.message,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async verifikasi(req: Request, res: Response, next: NextFunction) {
    try {
      const { donasiId } = req.params;
      const { statusBaru, alasanDitolak } = req.body;

      const result = await DonasiService.verifikasiDonasi({
        donasiId: donasiId as string,
        statusBaru,
        alasanDitolak,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: `Status donasi berhasil diperbarui menjadi ${statusBaru}`,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getRiwayat({ role, userId, shelterId }: GetRiwayatProps) {
    const where: any = {
      deletedAt: null,
    };

    if (role === "DONATUR") {
      where.donaturId = userId;
    }

    if (role === "SHELTER") {
      where.shelterId = shelterId;
    }

    return await prisma.donasi.findMany({
      where,
      include: {
        donatur: {
          select: {
            namaLengkap: true,
            email: true,
          },
        },
        shelter: {
          select: {
            namaShelter: true,
          },
        },
        satwa: {
          select: {
            nama: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  static async deleteDonasi(req: Request, res: Response, next: NextFunction) {
    try {
      let donasiId = req.params.donasiId;

      if (!donasiId || Array.isArray(donasiId)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "Parameter donasiId tidak valid",
        });
      }

      // Pastikan fungsi ini memanggil service yang kita buat sebelumnya
      const result = await DonasiService.deleteDonasi(donasiId);

      res.status(StatusCodes.OK).json({
        success: true,
        message: "Donasi berhasil dihapus",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
