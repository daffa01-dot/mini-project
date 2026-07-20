import express, { NextFunction, Request, Response } from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
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
console.log("API_PREFIX =", API_PREFIX);
console.log("WHITE_LIST =", WHITE_LIST);

app.get("/debug", (_req, res) => {
  res.json({
    apiPrefix: API_PREFIX,
    whiteList: WHITE_LIST,
  });
});
app.use(
  cors({
    origin: WHITE_LIST,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(
  "/uploads",
  express.static(
    path.join(process.cwd(), "public/uploads"),
  ),
);

console.log("API_PREFIX =", API_PREFIX);
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});
app.use(express.json());
app.get("/tes", (_req, res) => {
  res.json({ ok: true });
});
app.use(cookieParser());
app.get("/tes", (_req, res) => {
  res.json({ ok: true });
});
app.use(`${API_PREFIX}/auth`, authRoute);
app.use(`${API_PREFIX}/donatur`, donaturRouter);
app.use(`${API_PREFIX}/donasi`, donasiRouter);
app.use(`${API_PREFIX}/laporan`, laporanRouter);
app.use(`${API_PREFIX}/satwa`, router);
app.use("/api/v1/dashboard", dashboardRouter);
app.use("/api/v1/shelter", shelterRouter);

app.use(
  `${API_PREFIX}/src/uploads`,
  express.static(path.join(__dirname, "uploads")),
);

app.use(
  `${API_PREFIX}/uploads`,
  express.static(path.join(process.cwd(), "public/uploads")),
);

app.get("/ping", (_: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: "pong" });
});

app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  res.status(err?.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message || "Internal Server Error",
    data: null,
  });
});



export default app;
