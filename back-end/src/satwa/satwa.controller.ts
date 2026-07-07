import { Request, Response } from 'express';
import { SatwaService } from './satwa.service';
import { StatusCodes } from 'http-status-codes';

export class SatwaController {
  static async createSatwa(req: Request, res: Response) {
    try {
      // Ambil user ID dari token JWT (dari auth.middleware)
      const userId = res.locals.payload.id; 
      
      // req.body berisi teks, req.file berisi gambar
      const data = await SatwaService.create(userId, req.body, req.file);

      res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Data satwa berhasil ditambahkan',
        data
      });
    } catch (error: any) {
      // Pass error ke error middleware
      res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message
      });
    }
  }
}