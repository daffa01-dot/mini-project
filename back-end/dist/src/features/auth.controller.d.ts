import { Request, Response, NextFunction } from "express";
export declare class AuthController {
    static register_user(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static login(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static logout(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static me(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=auth.controller.d.ts.map