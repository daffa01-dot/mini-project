import { Request, Response, NextFunction } from "express";
import { LaporanService } from "./laporan.service";
import { CreateLaporanSchema } from "../validation/laporan.validation";
import { StatusCodes } from "http-status-codes";

export class LaporanController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userPayload =
        res.locals.payload || res.locals.user || (req as any).user;

      const validatedData = CreateLaporanSchema.parse(req.body);

      const file = (req as any).file;
      if (!file) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "Foto perkembangan kondisi satwa terbaru wajib diunggah",
        });
      }

      const fotoUrl = file.path || file.url;

      const result = await LaporanService.createLaporan({
        judul: validatedData.judul,
        deskripsi: validatedData.deskripsi,
        satwaId: validatedData.satwaId,
        fotoUrl: fotoUrl,
        userPayload,
      });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Kabar terbaru satwa berhasil dipublikasikan",
        data: result,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: error.errors[0].message,
        });
      }

      return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getBySatwa(req: Request, res: Response, next: NextFunction) {
    try {
      const satwaId = Array.isArray(req.params.satwaId)
        ? req.params.satwaId[0]
        : req.params.satwaId;

      if (!satwaId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "ID Satwa tidak boleh kosong",
        });
      }

      const result = await LaporanService.getLaporanBySatwa(satwaId);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Berhasil mengambil linimasa kabar satwa",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      const result = await LaporanService.getDetail(id as string);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Detail laporan berhasil diambil.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      const userPayload =
        res.locals.payload || res.locals.user || (req as any).user;

      const file = (req as any).file;

      const result = await LaporanService.updateLaporan({
        laporanId: id as string,
        judul: req.body.judul,
        deskripsi: req.body.deskripsi,
        fotoUrl: file?.path || file?.url,
        userPayload,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Laporan berhasil diperbarui.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;

      const userPayload =
        res.locals.payload || res.locals.user || (req as any).user;

      const result = await LaporanService.deleteLaporan(
        id as string,
        userPayload,
      );

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Laporan berhasil dihapus.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
