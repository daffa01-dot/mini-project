"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const laporan_controler_1 = require("./laporan.controler");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const multerMiddleware_1 = require("../middlewares/multerMiddleware");
const client_1 = require("@prisma/client");
const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const laporanRouter = (0, express_1.Router)();
const multerMiddleware = new multerMiddleware_1.MulterMiddleware();
laporanRouter.get("/detail/:id", laporan_controler_1.LaporanController.getDetail);
laporanRouter.patch("/:id", auth_middleware_1.AuthMiddleware.authenticated(secretKey), auth_middleware_1.AuthMiddleware.authorized([client_1.Role.SUPER_ADMIN, client_1.Role.SHELTER]), multerMiddleware_1.uploadImage.single("fotoSatwa"), laporan_controler_1.LaporanController.update);
laporanRouter.delete("/:id", auth_middleware_1.AuthMiddleware.authenticated(secretKey), auth_middleware_1.AuthMiddleware.authorized([client_1.Role.SUPER_ADMIN, client_1.Role.SHELTER]), laporan_controler_1.LaporanController.delete);
laporanRouter.get("/:satwaId", laporan_controler_1.LaporanController.getBySatwa);
exports.default = laporanRouter;
//# sourceMappingURL=laporan.route.js.map