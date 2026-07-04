import { Router } from "express";
import userController from "../controler/donatur.controler";
import { verifyToken, checkRole } from "../middleware/auth.middleware";

const donaturRouter = Router();

donaturRouter.post("/register", userController.register);
donaturRouter.post("/login", userController.login);

donaturRouter.get("/profile", verifyToken, userController.getProfile);
donaturRouter.get("/admin/users", verifyToken, checkRole(["ADMIN"]), userController.getAllUsersDummy);

export default donaturRouter;