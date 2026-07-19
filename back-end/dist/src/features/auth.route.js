"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../features/auth.controller");
const donatur_controller_1 = require("../donatur/donatur.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validate_1 = require("../validation/validate");
const auth_validation_1 = require("../features/auth.validation");
const secretKey = process.env.JWT_SECRET_KEY || "secret_super_aman";
const authRouter = (0, express_1.Router)();
// ============================================================
authRouter.post("/register-shelter", (0, validate_1.validate)(auth_validation_1.AuthValidation.REGISTER_USER), auth_controller_1.AuthController.register_user);
authRouter.post("/login", (0, validate_1.validate)(auth_validation_1.AuthValidation.LOGIN_USER), auth_controller_1.AuthController.login);
authRouter.post("/register-donatur", donatur_controller_1.DonaturController.register);
authRouter.post("/logout", auth_controller_1.AuthController.logout);
authRouter.get("/profile-donatur", auth_middleware_1.AuthMiddleware.authenticated(secretKey), donatur_controller_1.DonaturController.getProfile);
authRouter.get("/me", auth_middleware_1.AuthMiddleware.authenticated(secretKey), auth_controller_1.AuthController.me);
exports.default = authRouter;
//# sourceMappingURL=auth.route.js.map