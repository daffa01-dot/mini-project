import { Router } from "express";
import { DonaturController } from "./donatur.controller";
import { Role } from "@prisma/client";

import { AuthMiddleware } from "../middlewares/auth.middleware";

const donaturRouter = Router();
const authMiddleware = new AuthMiddleware();

donaturRouter.get(
  "/profile",
  AuthMiddleware.authenticated.bind(authMiddleware),
  AuthMiddleware.authorized([Role.DONATUR]),
  DonaturController.getProfile,
);

export default donaturRouter;
