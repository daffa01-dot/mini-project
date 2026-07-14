import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { StatusCodes } from "http-status-codes";
import authRoute from "./features/auth.route";
import donaturRouter from "./donatur/donatur-route";
import donasiRouter from "./donasi/donasi.route";
import laporanRouter from "./laporan/laporan.route";
import router from "./satwa/satwa.route";
import dashboardRouter from "./dashboard/dashboard.route";
import shelterRouter from "./shelter/shelter.route";
import { PORT, API_PREFIX, WHITE_LIST } from "./configs/env.configs";

const app = express();

// 1. Konfigurasi Middleware CORS
app.use(
  cors({
    origin: WHITE_LIST,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// 2. Middleware Parser bawaan Express & Cookie
app.use(express.json());
// 🟢 CHANGED LINE 29: Added urlencoded. Essential for parsing standard HTML form submissions securely.
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

// 3. Routing
app.use(`${API_PREFIX}/auth`, authRoute);
app.use(`${API_PREFIX}/donatur`, donaturRouter);
app.use(`${API_PREFIX}/donasi`, donasiRouter);
app.use(`${API_PREFIX}/laporan`, laporanRouter);
app.use(`${API_PREFIX}/satwa`, router);
// 🟢 CHANGED LINES 39-40: Replaced hardcoded "/api/v1" with dynamic `${API_PREFIX}` for architecture consistency.
app.use(`${API_PREFIX}/dashboard`, dashboardRouter);
app.use(`${API_PREFIX}/shelter`, shelterRouter);

// 🟢 CHANGED: COMPLETELY REMOVED `app.use(express.static(...))`
// Why: Requirement 1.6 mandates cloud storage only. Removing this prevents accidental local file uploads.

// 4. Endpoint Uji Coba Base (Ping-Pong)
app.get("/ping", (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: "pong" });
});

// 5. Global Error Handling Middleware
app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  // 🟢 CHANGED LINES 53-55: Complies with Req 2.1 ("No console.log in production").
  // It will now ONLY log errors to your terminal if you are in development mode.
  if (process.env.NODE_ENV !== "production") {
    console.error("🔥 [DEV ERROR LOG]:", err);
  }

  // 🟢 CHANGED LINE 58: Fallback to err.statusCode (used by many libraries) if err.status is missing.
  const status = err?.status || err?.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  
  res.status(status).json({
    success: false,
    message: err?.message || "Internal Server Error",
    data: null,
  });
});

// 🟢 CHANGED LINE 67: Cleaned up messy commented-out environment checks. 
app.listen(PORT, () => {
  console.log(`[⚡APP] Application is running on port: ${PORT}`);
});

export default app;