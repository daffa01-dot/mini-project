"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const satwa_controller_1 = require("../satwa/satwa.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const client_1 = require("@prisma/client");
const multerMiddleware_1 = require("../middlewares/multerMiddleware");
const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const router = (0, express_1.Router)();
// Endpoint Publik (Semua orang bisa melihat daftar hewan)
router.get("/", satwa_controller_1.SatwaController.getAll);
router.get("/my", auth_middleware_1.AuthMiddleware.authenticated(secretKey), auth_middleware_1.AuthMiddleware.authorized([client_1.Role.SHELTER]), satwa_controller_1.SatwaController.getMyAnimals);
router.get("/:id", satwa_controller_1.SatwaController.getById);
// Endpoint Privat (Hanya Shelter yang login yang bisa menambah/mengubah hewan)
router.post("/", auth_middleware_1.AuthMiddleware.authenticated(secretKey), auth_middleware_1.AuthMiddleware.authorized([client_1.Role.SHELTER]), multerMiddleware_1.uploadImage.single("foto"), satwa_controller_1.SatwaController.createSatwa);
router.put("/:id", auth_middleware_1.AuthMiddleware.authenticated(secretKey), auth_middleware_1.AuthMiddleware.authorized([client_1.Role.SHELTER]), multerMiddleware_1.uploadImage.single("foto"), satwa_controller_1.SatwaController.update);
router.delete("/:id", auth_middleware_1.AuthMiddleware.authenticated(secretKey), auth_middleware_1.AuthMiddleware.authorized([client_1.Role.SHELTER]), satwa_controller_1.SatwaController.remove);
exports.default = router;
//# sourceMappingURL=satwa.route.js.map