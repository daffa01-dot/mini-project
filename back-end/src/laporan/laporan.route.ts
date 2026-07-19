import { Router } from "express";
import { LaporanController } from "./laporan.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";

import { MulterMiddleware, uploadImage } from "../middlewares/multerMiddleware";
import { Role } from "@prisma/client";

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const laporanRouter = Router();
const multerMiddleware = new MulterMiddleware();
laporanRouter.get("/detail/:id", LaporanController.getDetail);

laporanRouter.patch(
  "/:id",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SUPER_ADMIN, Role.SHELTER]),
  uploadImage.single("fotoSatwa"),
  LaporanController.update,
);

laporanRouter.delete(
  "/:id",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SUPER_ADMIN, Role.SHELTER]),
  LaporanController.delete,
);
laporanRouter.get("/:satwaId", LaporanController.getBySatwa);

export default laporanRouter;
