import { NextFunction, Request, Response } from "express";
import { Role } from "@prisma/client";
export declare class AuthMiddleware {
    static authenticated(secretKey: string): (req: Request, res: Response, next: NextFunction) => void;
    static authorized(allowedRoles: Role[] | string[]): (req: Request, res: Response, next: NextFunction) => void;
}
//# sourceMappingURL=auth.middleware.d.ts.map