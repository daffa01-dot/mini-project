import { Router } from 'express';
import { AuthController } from './auth.controller';

const authRouter = Router();

// Alur Autentikasi Umum (Donatur)
authRouter.post('/register-donatur', AuthController.register_user);
authRouter.post('/login-donatur', AuthController.loginUser);

// Alur Autentikasi Per Role (Admin & Shelter)
authRouter.post('/register-role', AuthController.registerEmployee);
authRouter.post('/login-role', AuthController.loginEmployee);

export default authRouter;
