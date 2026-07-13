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

router.post(
  "/",

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
