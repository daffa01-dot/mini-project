import { Request, Response, NextFunction } from "express";
import { SatwaService } from "./satwa.service";
import { StatusCodes } from "http-status-codes";

export class SatwaController {
  static async createSatwa(req: Request, res: Response) {
    try {
      const userId = res.locals.payload.id;

      const data = await SatwaService.create(userId, req.body, req.file);

      res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Data hewan berhasil ditambahkan",
        data,
      });
    } catch (error: any) {
      res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export const getAll = async (req: Request, res: Response, next: Function) => {
  try {
    const data = await SatwaService.getAllSatwa();
    res.status(200).json({
      success: true,
      message: "Successfully fetched all animals",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const data = await SatwaService.getSatwaById(id as string);
    res.status(200).json({
      success: true,
      message: "Successfully fetched animal details",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const updateData = req.body;

    const data = await SatwaService.updateSatwa(id as string, updateData);
    res.status(200).json({
      success: true,
      message: "Successfully updated animal",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    await SatwaService.deleteSatwa(id as string);
    res.status(200).json({
      success: true,
      message: "Successfully deleted animal",
    });
  } catch (error) {
    next(error);
  }
};
