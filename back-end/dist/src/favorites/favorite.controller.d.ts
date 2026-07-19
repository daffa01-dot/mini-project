import { Request, Response, NextFunction } from 'express';
export declare class FavoritesController {
    static addSatwaFavorite(req: Request, res: Response, next: NextFunction): Promise<void>;
    static addShelterFavorite(req: Request, res: Response, next: NextFunction): Promise<void>;
    static listFavorites(req: Request, res: Response, next: NextFunction): Promise<void>;
    static removeFavorite(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=favorite.controller.d.ts.map