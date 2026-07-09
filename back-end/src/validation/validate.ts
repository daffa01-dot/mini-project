import { StatusCodes } from 'http-status-codes';
import { ZodType, ZodError } from 'zod';
import { ResponseError } from '../utils/response-error.util';

export function validate<T>(schema: ZodType<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    // 🟢 PERBAIKAN: Gunakan result.error yang bertipe ZodError secara eksplisit
    const error = result.error as ZodError;
    
    // Ambil semua pesan issue dan gabungkan menjadi string terpisah koma
    const errorMessages = error.issues
      .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
      .join(', ');

    throw new ResponseError(
      StatusCodes.BAD_REQUEST,
      errorMessages
    );
  }

  return result.data;
}