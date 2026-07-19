"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const favorite_controller_1 = require("./favorite.controller");
const validate_1 = require("../validation/validate");
const favorites_validation_1 = require("./favorites.validation");
const router = (0, express_1.Router)();
router.post('/satwa', (0, validate_1.validate)(favorites_validation_1.FavoritesValidation.ADD_SATWA), favorite_controller_1.FavoritesController.addSatwaFavorite);
router.post('/shelter', (0, validate_1.validate)(favorites_validation_1.FavoritesValidation.ADD_SHELTER), favorite_controller_1.FavoritesController.addShelterFavorite);
router.get('/', favorite_controller_1.FavoritesController.listFavorites);
router.delete('/:id', favorite_controller_1.FavoritesController.removeFavorite);
exports.default = router;
//# sourceMappingURL=favorites.route.js.map