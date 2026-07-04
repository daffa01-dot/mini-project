import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const JWT_SECRET = process.env.JWT_SECRET || "secret_super_aman";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // Postman sends tokens like: "Bearer eyJhbGciOi..."
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "Akses ditolak: Token tidak ditemukan!",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Attach the decoded token payload (usually user ID and role) to the request
    (req as any).user = decoded; 
    next(); // Pass the request to the next stop (the controller)
  } catch (error) {
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: "Token tidak valid atau sudah kadaluarsa!",
    });
  }
};


export const checkRole = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // We get this from the verifyToken middleware above!
    const user = (req as any).user;

    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: `Akses ditolak: Hanya untuk role ${allowedRoles.join(" / ")}`,
      });
    }
    
    next(); // They have the right role, let them through!
  };
};