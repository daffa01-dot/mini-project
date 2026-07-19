"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shelter_controler_1 = require("./shelter.controler");
const shelterRouter = (0, express_1.Router)();
shelterRouter.get("/", shelter_controler_1.ShelterController.getList);
shelterRouter.get("/:id", shelter_controler_1.ShelterController.getDetail);
exports.default = shelterRouter;
//# sourceMappingURL=shelter.route.js.map