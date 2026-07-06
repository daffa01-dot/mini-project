import jwt from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_SECRET_KEY, JWT_SECRET_VERIFICATION_KEY, JWT_VERIFICATION_EXPIRES_IN } from '../configs/env.configs'
import type { StringValue } from 'ms';
import { Role } from '@prisma/client';

// 1. Buat interface khusus untuk struktur isi Token
export interface JWTPayload {
  id: string;
  email: string;
  role: Role;
}

export class JWTUtil {
  // 2. Ganti 'any' dengan 'JWTPayload' demi type-safety
  static signToken(payload: JWTPayload) {
    return jwt.sign({ ...payload }, JWT_SECRET_KEY! as string, {
      expiresIn: JWT_EXPIRES_IN! as StringValue,
    });
  }

  static signVerificationToken(payload: Omit<JWTPayload, 'role'>) {
    return jwt.sign({ ...payload }, JWT_SECRET_VERIFICATION_KEY! as string, {
      expiresIn: JWT_VERIFICATION_EXPIRES_IN! as StringValue,
    });
  }

  // 3. Berikan return type yang jelas saat verify token dilakukan
  static verifyToken(token: string): JWTPayload {
    return jwt.verify(token, JWT_SECRET_KEY!) as JWTPayload;
  }
}