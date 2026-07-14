import { Router } from "express";
import { SatwaController } from "../satwa/satwa.controller"; 
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import { uploadImage } from "../middlewares/multerMiddleware";

const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const router = Router();

// Endpoint Publik (Semua orang bisa melihat daftar hewan)
router.get("/", SatwaController.getAll);
router.get("/:id", SatwaController.getById);

// Endpoint Privat (Hanya Shelter yang login yang bisa menambah/mengubah hewan)
router.post(
  "/",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SHELTER]),
  uploadImage.single("foto"),
  SatwaController.createSatwa
);

router.put(
  "/:id",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SHELTER]),
  uploadImage.single("foto"),
  SatwaController.update
);

router.delete(
  "/:id",
  AuthMiddleware.authenticated(secretKey),
  AuthMiddleware.authorized([Role.SHELTER]),
  SatwaController.remove
);

export default router;