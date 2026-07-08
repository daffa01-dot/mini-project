import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { StatusCodes } from 'http-status-codes';
import authRoute from './features/auth.route';
import donaturRouter from './donatur/donatur-route';
import donasiRouter from './donasi/donasi.route'; 
import laporanRouter from './laporan/laporan.route'; // Import sudah aman
import router from './satwa/satwa.route';
import { PORT, API_PREFIX, WHITE_LIST } from './configs/env.configs';

const app = express();

// 1. Konfigurasi Middleware CORS
app.use(
  cors({
    origin: WHITE_LIST, 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
  }),
);

// 2. Middleware Parser bawaan Express & Cookie
app.use(express.json());
app.use(cookieParser());

// =========================================================================
// 3. PENDAFTARAN ROUTE FITUR (SERAGAMKAN MENGGUNAKAN API_PREFIX)
// =========================================================================
app.use(`${API_PREFIX}/auth`, authRoute);
app.use(`${API_PREFIX}/donatur`, donaturRouter);
app.use(`${API_PREFIX}/donasi`, donasiRouter); 
app.use(`${API_PREFIX}/laporan`, laporanRouter); // <--- PINDAHKAN KE SINI (Gunakan API_PREFIX)
app.use(`${API_PREFIX}/satwa`, router); // Endpoint Satwa aktif!


// 4. Akses File Static
app.use(
  `${API_PREFIX}/src/uploads`,
  express.static(path.join(__dirname, 'uploads')),
);

app.use(
  `${API_PREFIX}/uploads`,
  express.static(path.join(process.cwd(), 'public/uploads')),
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

// =========================================================================
// 7. JALANKAN SERVER (HAPUS ATAU LONGGARKAN IF STATEMENT AGAR PASTI JALAN)
// =========================================================================
// Menggunakan OR operator agar jika NODE_ENV tidak terset, server tetap mau menyala saat 'npm run dev'
if (process.env.NODE_ENV === 'Mini-Project' || process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  app.listen(PORT, () => {
    console.log(`[⚡APP] Application is running on port: ${PORT}`);
    console.log(`[🔗PREFIX] API Path Prefix is: ${API_PREFIX}`);
  });
}

export default app;