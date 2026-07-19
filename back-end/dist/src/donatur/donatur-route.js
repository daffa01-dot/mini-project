"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donatur_controller_1 = require("./donatur.controller");
const client_1 = require("@prisma/client");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const donaturRouter = (0, express_1.Router)();
const authMiddleware = new auth_middleware_1.AuthMiddleware();
donaturRouter.get("/profile", auth_middleware_1.AuthMiddleware.authenticated.bind(authMiddleware), auth_middleware_1.AuthMiddleware.authorized([client_1.Role.DONATUR]), donatur_controller_1.DonaturController.getProfile);
exports.default = donaturRouter;
//# sourceMappingURL=donatur-route.js.map