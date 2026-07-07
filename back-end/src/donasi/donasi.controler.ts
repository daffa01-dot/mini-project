import { NextFunction, Request, Response } from 'express';
import { DonasiService } from './donasi.service';
import { StatusCodes } from 'http-status-codes';

export class DonasiController {
  // ==========================================
  // 1. HANDLER UNTUK CHECKOUT DONASI
  // ==========================================
  static async checkout(req: Request, res: Response, next: NextFunction) {
    try {
      const donaturId = res.locals.payload?.id || (req as any).user?.id; 
      const { nominal, catatan, satwaId, shelterId } = req.body;

      const result = await DonasiService.createCheckout({
        nominal: Number(nominal),
        catatan,
        satwaId,
        shelterId,
        donaturId
      });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Checkout berhasil, silakan lakukan transfer manual',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  // ==========================================
  // 2. HANDLER UNTUK UPLOAD BUKTI RESI
  // ==========================================
  static async uploadBukti(req: Request, res: Response, next: NextFunction) {
    try {
      const donaturId = res.locals.payload?.id || (req as any).user?.id;
      // Memaksa donasiId menjadi string murni agar melibas error 'undefined'
      const donasiId = req.params.donasiId as string; 

      // Memakai casting (req as any) sebagai fallback aman jika types multer belum terbaca sempurna
      const file = (req as any).file;

      if (!file) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: 'File bukti resi transfer wajib diunggah'
        });
      }

      const buktiResiPath = file.path; 

      const result = await DonasiService.uploadBuktiResi({
        donasiId,
        donaturId,
        buktiResiPath
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: result.message,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  // ==========================================
  // 3. HANDLER UNTUK VERIFIKASI (APPROVE/REJECT)
  // ==========================================
  static async verifikasi(req: Request, res: Response, next: NextFunction) {
    try {
      // Memaksa donasiId menjadi string murni agar melibas error 'undefined'
      const donasiId = req.params.donasiId as string; 
      const { status, alasanDitolak } = req.body;

      const result = await DonasiService.verifikasiDonasi({
        donasiId,
        statusBaru: status,
        alasanDitolak
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: `Status donasi berhasil diperbarui menjadi ${status}`,
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
}