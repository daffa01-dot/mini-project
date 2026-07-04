import { Router } from "express";
import {DonaturController} from "../donatur/donatur.controller"
import { verifyToken, checkRole } from "../middlewares/auth.middleware"

const donaturRouter = Router();

donaturRouter.post("/register", DonaturController.register);
donaturRouter.post("/login", DonaturController.login);

donaturRouter.get("/profile", verifyToken, DonaturController.getProfile);
donaturRouter.get("/admin/users", verifyToken, checkRole(["SUPER_ADMIN"]),DonaturController.getAllUsersDummy);

export default donaturRouter;