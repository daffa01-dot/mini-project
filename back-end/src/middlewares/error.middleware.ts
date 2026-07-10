import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 1. Ambil status code dinamis (bisa dari err.status atau err.statusCode)
  let status = err.status || err.statusCode;
  let message = err.message || "Internal Server Error";

  // 2. JIKA STATUS TIDAK ADA (Error bawaan JavaScript biasa / throw new Error)
  // Kita bantu petakan teks pesannya ke HTTP Status yang logis
  if (!status && err instanceof Error) {
    if (message.includes("already registered") || message.includes("already exists")) {
      status = StatusCodes.CONFLICT; // 409
    } else if (message.includes("incorrect") || message.includes("Invalid credential")) {
      status = StatusCodes.UNAUTHORIZED; // 401
    } else if (message.includes("not found")) {
      status = StatusCodes.NOT_FOUND; // 404
    } else if (message.includes("validation") || message.includes("wajib diisi")) {
      status = StatusCodes.BAD_REQUEST; // 400
    } else {
      status = StatusCodes.INTERNAL_SERVER_ERROR; // 500 jika tidak terdeteksi
    }
  }

  // 3. Jika setelah dicek di atas statusnya masih kosong atau bernilai 500, log ke terminal untuk debugging
  if (!status || status === StatusCodes.INTERNAL_SERVER_ERROR) {
    console.error("🔥 [Fatal System Error]:", err);
    status = StatusCodes.INTERNAL_SERVER_ERROR;
    message = "Internal Server Error";
  }

  // 4. KIRIM RESPONS KE POSTMAN DENGAN STATUS CODE YANG BENAR
  return res.status(status).json({
    success: false,
    message: message,
    data: null // Menyamakan dengan format response data: null di Postman Anda
  });
};