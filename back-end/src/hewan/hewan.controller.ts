import { Request, Response } from "express";
import { hewanService } from "./hewan.service";
import { StatusCodes } from "http-status-codes";

export class hewanController {
  static async createhewan(req: Request, res: Response) {
    try {
      // Ambil user ID dari token JWT (dari auth.middleware)
      const userId = res.locals.payload.id;

      // req.body berisi teks, req.file berisi gambar
      const data = await hewanService.create(userId, req.body, req.file);

      res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Data hewan berhasil ditambahkan",
        data,
      });
    } catch (error: any) {
      // Pass error ke error middleware
      res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}

// GET ALL
export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await HewanService.getAllHewan();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all animals",
      data: data
    });
  } catch (error) {
    next(error);
  }
};

// GET ONE
export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await HewanService.getHewanById(id);
    res.status(200).json({
      success: true,
      message: "Successfully fetched animal details",
      data: data
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    
    // If they uploaded a new photo, you'd add your cloudinary logic here just like in Create.
    // For now, we just update the text fields.
    const updateData = req.body; 

    const data = await HewanService.updateHewan(id, updateData);
    res.status(200).json({
      success: true,
      message: "Successfully updated animal",
      data: data
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await hewanService.deleteHewan(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted animal"
    });
  } catch (error) {
    next(error);
  }
};
