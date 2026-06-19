import { Router } from "express";
import { authcontroller } from "../controler/authcontroler";

const AuthRouter = Router()

AuthRouter.post('/register', authcontroller.register);
AuthRouter.post('/login', authcontroller.login);

export default AuthRouter;