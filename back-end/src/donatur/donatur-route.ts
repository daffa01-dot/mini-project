import { Router } from "express";
import { DonaturController } from './donatur.controller'
import { Role } from "@prisma/client";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import favoritesRouter from "../favorites/favorites.route";

const donaturRouter = Router();
const secretKey = process.env.JWT_SECRET_KEY || "";
const auth = AuthMiddleware.authenticated(secretKey);

donaturRouter.get(
  "/profile",
  auth,
  AuthMiddleware.authorized([Role.DONATUR]),
  DonaturController.getProfile,
);

donaturRouter.use(
  "/favorites",
  auth,
  AuthMiddleware.authorized([Role.DONATUR]),
  favoritesRouter,
);

export default donaturRouter;