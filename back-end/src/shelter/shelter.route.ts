import { Router } from "express";
import { ShelterController } from './shelter.controler'
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { Role } from "@prisma/client";
import { JWT_SECRET_KEY } from "../configs/env.configs";

const shelterRouter = Router();
const auth = AuthMiddleware.authenticated(JWT_SECRET_KEY || "");

// GET /api/v1/shelter (Mendukung ?search=... & ?kota=...)
shelterRouter.get("/", ShelterController.getList);

// GET /api/v1/shelter/:id
shelterRouter.get("/:id", ShelterController.getDetail);

// Rekening management for shelter accounts
shelterRouter.get(
  "/:shelterId/rekening",
  auth,
  AuthMiddleware.authorized([Role.SHELTER, Role.SUPER_ADMIN]),
  ShelterController.getRekening,
);

shelterRouter.post(
  "/:shelterId/rekening",
  auth,
  AuthMiddleware.authorized([Role.SHELTER, Role.SUPER_ADMIN]),
  ShelterController.createRekening,
);

shelterRouter.patch(
  "/rekening/:rekeningId",
  auth,
  AuthMiddleware.authorized([Role.SHELTER, Role.SUPER_ADMIN]),
  ShelterController.updateRekening,
);

shelterRouter.delete(
  "/rekening/:rekeningId",
  auth,
  AuthMiddleware.authorized([Role.SHELTER, Role.SUPER_ADMIN]),
  ShelterController.deleteRekening,
);

export default shelterRouter;