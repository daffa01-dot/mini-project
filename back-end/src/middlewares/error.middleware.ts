import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let status = err.status || err.statusCode;
  let message = err.message || "Internal Server Error";

  if (!status && err instanceof Error) {
    if (
      message.includes("already registered") ||
      message.includes("already exists")
    ) {
      status = StatusCodes.CONFLICT; // 409
    } else if (
      message.includes("incorrect") ||
      message.includes("Invalid credential")
    ) {
      status = StatusCodes.UNAUTHORIZED;
    } else if (message.includes("not found")) {
      status = StatusCodes.NOT_FOUND;
    } else if (
      message.includes("validation") ||
      message.includes("wajib diisi")
    ) {
      status = StatusCodes.BAD_REQUEST;
    } else {
      status = StatusCodes.INTERNAL_SERVER_ERROR;
    }
  }

  if (!status || status === StatusCodes.INTERNAL_SERVER_ERROR) {
    console.error("🔥 [Fatal System Error]:", err);
    status = StatusCodes.INTERNAL_SERVER_ERROR;
    message = "Internal Server Error";
  }

  return res.status(status).json({
    success: false,
    message: message,
    data: null,
  });
};
