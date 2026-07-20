import { NextFunction, Request, Response } from "express";
import { DonasiService } from "./donasi.service";
import { StatusCodes } from "http-status-codes";

type GetRiwayatProps = {
  role: string;
  userId?: string;
  shelterId?: string;
};

export class DonasiController {
  static async checkout(req: Request, res: Response, next: NextFunction) {
    try {
      const donaturId = res.locals.payload?.id;
      const { nominal, catatan, satwaId, shelterId } = req.body;

      const result = await DonasiService.createCheckout({
        nominal: Number(nominal),
        catatan,
        satwaId,
        shelterId,
        donaturId: donaturId,
      });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Checkout berhasil, silakan lakukan transfer manual",
        data: result,
      });
    } catch (error) {
       console.error("CHECKOUT ERROR:", error);
      next(error);
    }
  }

  static async uploadBukti(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.payload.id;
      const donasiId = req.params.donasiId as string;

      const file = (req as any).file;

      if (!file) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "File bukti resi transfer wajib diunggah",
        });
      }

      /**
       * Simpan path yang bisa diakses browser,
       * jangan simpan file.path (D:\....)
       */
      const buktiResiPath = `/uploads/resi/${file.filename}`;

      const result = await DonasiService.uploadBuktiResi({
        donasiId,
        donaturId: userId,
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
      const donasiId = req.params.donasiId as string;
      const { statusBaru, alasanDitolak } = req.body;

      const userId = res.locals.payload.id;

      const result = await DonasiService.verifikasiDonasi({
        userId,
        donasiId,
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
      const payload = res.locals.payload;

      const result = await DonasiService.getRiwayat({
        role: payload.role,
        userId: payload.id,
        shelterId: payload.shelterId,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Riwayat donasi berhasil diambil.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
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
      const userId = res.locals.payload.id;
      const role = res.locals.payload.role;

      const result = await DonasiService.deleteDonasi(userId, role, donasiId);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Donasi berhasil dihapus",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const donasiId = req.params.donasiId;

      if (!donasiId || Array.isArray(donasiId)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "Parameter donasiId tidak valid",
        });
      }

      const result = await DonasiService.getById(donasiId);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Detail donasi berhasil diambil.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
