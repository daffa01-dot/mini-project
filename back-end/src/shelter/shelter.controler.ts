import { NextFunction, Request, Response } from "express";
import { ShelterService } from "./shelter.service";
import { StatusCodes } from "http-status-codes";

export class ShelterController {
  // Handler untuk list shelter
  // Handler untuk list shelter
  static async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const { search, kota, page, perPage } = req.query;
      const pageNumber = Number(page) || 1;
      const perPageNumber = Number(perPage) || 10;

      const result = await ShelterService.getAllShelters({
        search: (search as string) || "",
        kota: (kota as string) || "",
        page: pageNumber,
        perPage: perPageNumber,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Daftar shelter berhasil diambil",
        data: result.data,
        meta: result.meta,
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
  }

  static async getRekening(req: Request, res: Response, next: NextFunction) {
    try {
      const shelterId = req.params.shelterId as string;
      const result = await ShelterService.getRekeningByShelter(shelterId);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Daftar rekening shelter berhasil diambil",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createRekening(req: Request, res: Response, next: NextFunction) {
    try {
      const shelterId = req.params.shelterId as string;
      const { bankName, accountNumber, accountHolder, isPrimary } = req.body;

      const result = await ShelterService.createRekening(shelterId, {
        namaBank: bankName,
        nomorRekening: accountNumber,
        atasNamaRekening: accountHolder,
        isPrimary,
      });

      return res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Rekening shelter berhasil dibuat",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateRekening(req: Request, res: Response, next: NextFunction) {
    try {
      const rekeningId = req.params.rekeningId as string;
      const { bankName, accountNumber, accountHolder, isPrimary } = req.body;

      const result = await ShelterService.updateRekening(rekeningId, {
        namaBank: bankName,
        nomorRekening: accountNumber,
        atasNamaRekening: accountHolder,
        isPrimary,
      });

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Rekening shelter berhasil diperbarui",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteRekening(req: Request, res: Response, next: NextFunction) {
    try {
      const rekeningId = req.params.rekeningId as string;
      const result = await ShelterService.deleteRekening(rekeningId);

      return res.status(StatusCodes.OK).json({
        success: true,
        message: "Rekening shelter berhasil dihapus",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
