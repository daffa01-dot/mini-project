import { Request, Response, NextFunction } from "express";
import { ZodTypeAny, ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

export const validate = (schema: ZodTypeAny) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(StatusCodes.BAD_REQUEST).json({
          success: false,
          message: "Validasi data gagal",
          errors: error.format(),
        });
        return;
      }

      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Terjadi kesalahan pada server internal",
      });
      return;
    }
  };
};
