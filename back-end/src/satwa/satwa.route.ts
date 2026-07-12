import { Router } from "express";
import {
  getAll,
  getById,
  remove,
  SatwaController,
  update,
} from "./satwa.controler";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import { uploadImage } from "../middlewares/multerMiddleware";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);

// Route: POST /api/v1/hewan
// 1. Cek Token -> 2. Cek Role -> 3. Tangkap File 'foto' -> 4. Jalankan Controller

router.post(
  "/",
  // verifyToken,
  // checkRole([Role.SHELTER]),
  AuthMiddleware.authenticated(""),
  AuthMiddleware.authorized([Role.SHELTER]),
  uploadImage.single("foto"),
  SatwaController.createSatwa,
);

router.put(
  "/:id",
  AuthMiddleware.authenticated(""),
  AuthMiddleware.authorized([Role.SHELTER]),
  uploadImage.single("foto"),
  update,
);

router.delete(
  "/:id",
  AuthMiddleware.authenticated(""),
  AuthMiddleware.authorized([Role.SHELTER]),
  remove,
);

export default router;
