import { Role } from '@prisma/client';
export interface JWTPayload {
    id: string;
    email: string;
    role: Role;
    shelterId?: string | null;
}
export declare class JWTUtil {
    static signToken(payload: JWTPayload): string;
    static signVerificationToken(payload: Omit<JWTPayload, 'role'>): string;
    static verifyToken(token: string): JWTPayload;
}
//# sourceMappingURL=jwt.d.ts.map