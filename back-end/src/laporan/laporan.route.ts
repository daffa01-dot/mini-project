import { Router } from "express";
import { LaporanController } from "./laporan.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";

import { MulterMiddleware } from "../middlewares/multerMiddleware";
import { Role } from "@prisma/client";

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const laporanRouter = Router();

const laporanUpload = new MulterMiddleware("memoryStorage").upload(
  5 * 1024 * 1024,
);

// Detail laporan
laporanRouter.get("/detail/:id", LaporanController.getDetail);

// Update laporan
laporanRouter.put(
  "/:id",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SUPER_ADMIN, Role.SHELTER]),
  laporanUpload.single("fotoSatwa"),
  LaporanController.update,
);

// Soft Delete laporan
laporanRouter.delete(
  "/:id",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SUPER_ADMIN, Role.SHELTER]),
  LaporanController.delete,
);
laporanRouter.get("/:satwaId", LaporanController.getBySatwa);

export default laporanRouter;
