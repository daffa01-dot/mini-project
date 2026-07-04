import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { StatusCodes } from 'http-status-codes';
import authRoute from './features/auth.route';
import donaturRouter from './donatur/donatur-route'
// Impor konfigurasi dari file env config Anda
import { PORT, API_PREFIX, WHITE_LIST } from './configs/env.configs';

// Impor router Anda (sesuaikan dengan nama file export Anda)
// Jika file mengeksport default, gunakan import default tanpa kurung kurawal



const app = express();

// 1. Konfigurasi Middleware CORS
app.use(
  cors({
    origin: WHITE_LIST, // Menerima array dari configs/env.config
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Izinkan pengiriman cookie/token dari frontend
  }),
);

// 2. Middleware Parser bawaan Express & Cookie
app.use(express.json());
app.use(cookieParser());

// 3. Pendaftaran Route Fitur (Menggunakan API_PREFIX)

app.use(`${API_PREFIX}/auth`, authRoute);
app.use(`${API_PREFIX}/donatur`, donaturRouter);


// 4. Akses File Static (Untuk file upload seperti gambar/dokumen)
app.use(
  `${API_PREFIX}/src/uploads`,
  express.static(path.join(__dirname, 'uploads')),
);

// 5. Endpoint Uji Coba Base (Ping-Pong)
app.get('/ping', (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: 'pong' });
});

// 6. Global Error Handling Middleware
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  res.status(err?.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message || 'Internal Server Error',
    data: null,
  });
});

// 7. Menjalankan Server (Pastikan NODE_ENV di .env adalah "development")
if (process.env.NODE_ENV === 'Mini-Project') {
  app.listen(PORT, () => {
    console.log(`[⚡APP] Application is running on port: ${PORT}`);
  });
}

export default app;
