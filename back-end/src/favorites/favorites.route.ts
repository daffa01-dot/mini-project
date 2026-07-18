import { Router } from 'express';
import { FavoritesController } from './favorite.controller'
import { validate } from '../validation/validate';
import { FavoritesValidation } from './favorites.validation'

const router = Router();

router.post('/satwa', validate(FavoritesValidation.ADD_SATWA), FavoritesController.addSatwaFavorite);
router.post('/shelter', validate(FavoritesValidation.ADD_SHELTER), FavoritesController.addShelterFavorite);
router.get('/', FavoritesController.listFavorites);
router.delete('/:id', FavoritesController.removeFavorite);

export default router;