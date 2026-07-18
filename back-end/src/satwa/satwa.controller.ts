import { Request, Response, NextFunction } from "express";
import { SatwaService } from "./satwa.service";
import { StatusCodes } from "http-status-codes";

export class SatwaController {
  
  static async createSatwa(req: Request, res: Response, next: NextFunction) {
    try {
      // Ambil user ID dari token JWT (di-set oleh AuthMiddleware)
      const userId = res.locals.payload.id;

      // req.body berisi data teks (nama, jenis), req.file berisi gambar (foto)
      const data = await SatwaService.create(userId, req.body, req.file);

      res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Data hewan berhasil ditambahkan",
        data,
      });
    } catch (error) {
      next(error); // Serahkan ke error middleware
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await SatwaService.getAllSatwa();
      res.status(StatusCodes.OK).json({
        success: true,
        message: "Successfully fetched all animals",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await SatwaService.getSatwaById(id as string);
      res.status(StatusCodes.OK).json({
        success: true,
        message: "Successfully fetched animal details",
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      // KUNCI KEAMANAN: Ambil userId dari token untuk verifikasi kepemilikan
      const userId = res.locals.payload.id; 
      const updateData = req.body;

      // NOTE: Jika ingin update foto, logika req.file ditambahkan di service nanti
      const data = await SatwaService.updateSatwa(userId, id as string, updateData);
      
      res.status(StatusCodes.OK).json({
        success: true,
        message: "Successfully updated animal",
        data,
      });
    } catch (error) {
      next(error);
    }
    console.log("UPDATE RESULT:", "data.id");
console.log("UPDATE RESULT:", "data.nama");
  }

  static async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      // KUNCI KEAMANAN: Ambil userId dari token untuk verifikasi kepemilikan
      const userId = res.locals.payload.id; 
      
      await SatwaService.deleteSatwa(userId, id as string);
      
      res.status(StatusCodes.OK).json({
        success: true,
        message: "Successfully deleted animal",
      });
    } catch (error) {
      next(error);
    }
  }
  static async getMyAnimals(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = res.locals.payload.id;

    const data = await SatwaService.getMyAnimals(userId);

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched my animals",
      data,
    });
  } catch (error) {
    next(error);
  }
}

}