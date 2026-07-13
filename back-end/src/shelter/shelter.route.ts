import { Router } from "express";
import { ShelterController } from "./shelter.controler";

const shelterRouter = Router();

shelterRouter.get("/", ShelterController.getList);

shelterRouter.get("/:id", ShelterController.getDetail);

export default shelterRouter;
