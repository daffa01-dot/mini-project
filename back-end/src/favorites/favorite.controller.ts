import { Request, Response, NextFunction } from 'express';
import { FavoritesService } from './favorite.service'
import { StatusCodes } from 'http-status-codes';

export class FavoritesController {
  static async addSatwaFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.payload?.id as string;
      const { satwaId } = req.body;

      const result = await FavoritesService.addSatwaFavorite(userId, satwaId);
      res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Satwa bookmark state updated successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async addShelterFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.payload?.id as string;
      const { shelterId } = req.body;

      const result = await FavoritesService.addShelterFavorite(userId, shelterId);
      res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'Shelter bookmark state updated successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async listFavorites(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.payload?.id as string;
      const result = await FavoritesService.listFavorites(userId);

      res.status(StatusCodes.OK).json({
        success: true,
        message: 'Favorite collections catalog fetched successfully',
        data: result, // Contains separated fields: data.satwa and data.shelters
      });
    } catch (error) {
      next(error);
    }
  }

  static async removeFavorite(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.payload?.id as string;
      const id = req.params.id as string;

      const result = await FavoritesService.removeFavorite(id, userId);
      res.status(StatusCodes.OK).json({
        success: true,
        message: 'Favorite collection item detached successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}