import { Request, Response, NextFunction } from 'express';
import { LaporanService } from './laporan.service';
import { CreateLaporanSchema } from '../validation/laporan.validation';
import { StatusCodes } from 'http-status-codes';

export class LaporanController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // Menangkap payload dari hasil dekorasi middleware auth Anda
      const userPayload = res.locals.payload || res.locals.user || (req as any).user;
      
      // Menggunakan Zod untuk memvalidasi input text body
      const validatedData = CreateLaporanSchema.parse(req.body);

      // Tangkap file dari Multer
      const file = (req as any).file;
      if (!file) {
        return res.status(StatusCodes.BAD_REQUEST).json({ // FIXED: Diubah ke BAD_REQUEST (400)
          success: false,
          message: "Foto perkembangan kondisi satwa terbaru wajib diunggah"
        });
      }

      // Ambil path penyimpanan lokal atau url cloud storage
      const fotoUrl = file.path || file.url; 

      // Teruskan data ke layer service untuk diproses ke PostgreSQL via Prisma
      const result = await LaporanService.createLaporan({
        judul: validatedData.judul,
        deskripsi: validatedData.deskripsi,
        satwaId: validatedData.satwaId, 
        fotoUrl: fotoUrl, 
        userPayload
      });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Kabar terbaru satwa berhasil dipublikasikan",
        data: result
      });
    } catch (error: any) {
      // Interseptor error validasi dari Zod
      if (error.name === "ZodError") {
        return res.status(StatusCodes.BAD_REQUEST).json({ 
          success: false, 
          message: error.errors[0].message 
        });
      }
      
      // Menangkap error logic dari service (seperti konflik ID shelter)
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        success: false, 
        message: error.message 
      });
    }
  }

  static async getBySatwa(req: Request, res: Response, next: NextFunction) {
    try {
      const satwaId = Array.isArray(req.params.satwaId) ? req.params.satwaId[0] : req.params.satwaId;
      
      if (!satwaId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "ID Satwa tidak boleh kosong"
        });
      }

      const result = await LaporanService.getLaporanBySatwa(satwaId);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Berhasil mengambil linimasa kabar satwa",
        data: result
      });
    } catch (error) {
      next(error); // Teruskan ke Global Error Handler di app.ts
    }
  }
}