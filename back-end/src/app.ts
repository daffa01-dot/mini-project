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

console.log("WHITE_LIST =", WHITE_LIST);

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("ORIGIN =", origin);

      callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use((req, res, next) => {
  console.log("Access-Control-Allow-Origin:", res.getHeader("Access-Control-Allow-Origin"));
  next();
});
// Menjawab semua preflight
app.options(/.*/, cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads")));

app.use(
  "/api/v1/uploads",
  express.static(path.join(process.cwd(), "public/uploads")),
);

// =========================
// Debug
// =========================

app.get("/ping", (_req, res) => {
  res.status(200).json({
    message: "pong",
  });
});

app.get("/env", (_req, res) => {
  res.json({
    whiteList: WHITE_LIST,
    nodeEnv: process.env.NODE_ENV,
  });
});

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
  console.error(err);

  res.status(err?.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message || "Internal Server Error",
    data: null,
  });
});

export default app;
