import { Router } from "express";
import { hewanController } from "./hewan.controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { uploadImage } from "../middlewares/multer.middleware";
import { Role } from "@prisma/client";
import { getAll, getById, update, remove } from './hewan.controller'; // Make sure these are imported!

router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

// Route: POST /api/v1/hewan
// 1. Cek Token -> 2. Cek Role -> 3. Tangkap File 'foto' -> 4. Jalankan Controller
const router = Router();

router.post(
  "/",
  // verifyToken,
  // checkRole([Role.SHELTER]),
  AuthMiddleware.authenticated(""),
  AuthMiddleware.authorized([Role.SHELTER]),
  uploadImage.single("foto"),
  hewanController.createhewan,
);

export default router;
