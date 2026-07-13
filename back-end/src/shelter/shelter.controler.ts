import { NextFunction, Request, Response } from "express";
import { ShelterService } from "./shelter.service";
import { StatusCodes } from "http-status-codes";

export class ShelterController {
  // Handler untuk list shelter
  // Handler untuk list shelter
  static async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const { search, kota } = req.query;

      // 🟢 PERBAIKAN: Tambahkan || "" untuk mengamankan tipe data dari undefined
      const shelters = await ShelterService.getAllShelters({
        search: (search as string) || "",
        kota: (kota as string) || "",
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Daftar shelter berhasil diambil",
        data: shelters,
      });
    } catch (error) {
      next(error);
    }
  }

  // Handler untuk detail shelter
  static async getDetail(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      // 🟢 PERBAIKAN: Berikan jaminan type casting 'as string' agar TypeScript tidak menganggapnya undefined
      const shelter = await ShelterService.getShelterById(id as string);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Detail shelter berhasil diambil",
        data: shelter,
      });
    } catch (error) {
      next(error);
    }
  }}