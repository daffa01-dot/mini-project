import { Request, Response, NextFunction, Router } from "express";
import { DonasiController } from "./donasi.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";

import { MulterMiddleware } from "../middlewares/multerMiddleware";

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

const auth = AuthMiddleware.authenticated(JWT_SECRET);

const authorizeShelterOrAdmin = AuthMiddleware.authorized([
  "SUPER_ADMIN",
  "SHELTER",
]);

const donasiUpload = new MulterMiddleware("diskStorage").upload(
  2 * 1024 * 1024,
);

router.post("/checkout", auth, DonasiController.checkout);

router.patch(
  "/:donasiId/upload-bukti",
  auth,

  donasiUpload.single("buktiResi"),

  DonasiController.uploadBukti,
);

router.patch(
  "/:donasiId/verifikasi",
  auth,
  authorizeShelterOrAdmin,
  DonasiController.verifikasi,
);

router.get("/riwayat", auth, DonasiController.getRiwayat);

router.delete(
  "/:donasiId",
  auth,
  authorizeShelterOrAdmin,
  DonasiController.deleteDonasi,
);

export default router;
