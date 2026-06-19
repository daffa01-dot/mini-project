import express from "express";
import { authcontroller } from "../controler/authcontroler";

const AuthRouter = express.Router();

AuthRouter.post('/register', authcontroller.register);
AuthRouter.post('/login', authcontroller.login);

export default AuthRouter;