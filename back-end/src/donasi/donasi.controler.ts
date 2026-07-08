import { NextFunction, Request, Response } from "express";
import { DonasiService } from "./donasi.service";
import { StatusCodes } from "http-status-codes";

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

  static async getRiwayat(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.payload?.id || (req as any).user?.id;
      const role = res.locals.payload?.role || (req as any).user?.role;
      const shelterId =
        res.locals.payload?.shelterId || (req as any).user?.shelterId;

      let result;

      if (role === "ADMIN") {
        result = await DonasiService.getRiwayatAdmin();
      } else if (role === "MITRA_SHELTER") {
        if (!shelterId) {
          return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message:
              "Akun Mitra Shelter Anda tidak terikat dengan ID Shelter mana pun",
          });
        }
        result = await DonasiService.getRiwayatShelter(shelterId);
      } else {
        result = await DonasiService.getRiwayatDonatur(userId);
      }

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Berhasil mengambil data riwayat donasi",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
