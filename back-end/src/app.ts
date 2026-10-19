import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { StatusCodes } from "http-status-codes";

import authRoute from "./features/auth.route";
import donaturRouter from "./donatur/donatur-route";
import donasiRouter from "./donasi/donasi.route";
import laporanRouter from "./laporan/laporan.route";
import satwaRouter from "./satwa/satwa.route";
import dashboardRouter from "./dashboard/dashboard.route";
import shelterRouter from "./shelter/shelter.route";

import { WHITE_LIST } from "./configs/env.configs";

const app = express();
app.get("/api/v1/test", (_req, res) => {
  res.json({
    ok: true,
  });
});

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = (WHITE_LIST ?? []).flatMap((value) => {
        const trimmed = value.trim().replace(/\/$/, "");
        if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return [trimmed];
        return [`https://${trimmed}`, `http://${trimmed}`];
      });
      if (!origin || allowedOrigins.includes(origin.replace(/\/$/, ""))) return callback(null, true);
      return callback(new Error("Origin tidak diizinkan oleh kebijakan CORS."));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads")));

app.use(
  "/api/v1/uploads",
  express.static(path.join(process.cwd(), "public/uploads")),
);

// =========================
// API ROUTES
// =========================

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/donatur", donaturRouter);
app.use("/api/v1/donasi", donasiRouter);
app.use("/api/v1/laporan", laporanRouter);
app.use("/api/v1/satwa", satwaRouter);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/shelter", shelterRouter);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err?.statusCode || err?.status || StatusCodes.INTERNAL_SERVER_ERROR;
  if (status >= 500) console.error("Unhandled API error:", err);
  res.status(status).json({
    success: false,
    message: status >= 500 ? "Terjadi kesalahan pada server." : err?.message || "Permintaan tidak valid.",
    data: null,
  });
});

export default app;
