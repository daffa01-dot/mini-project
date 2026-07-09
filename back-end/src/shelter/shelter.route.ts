import { Router } from "express";
import { ShelterController } from './shelter.controler'

const shelterRouter = Router();

// GET /api/v1/shelter (Mendukung ?search=... & ?kota=...)
shelterRouter.get("/", ShelterController.getList);

// GET /api/v1/shelter/:id
shelterRouter.get("/:id", ShelterController.getDetail);

export default shelterRouter;