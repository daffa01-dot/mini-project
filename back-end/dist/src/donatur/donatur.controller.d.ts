import { Request, Response } from "express";
export declare class DonaturController {
    static register(req: Request, res: Response): Promise<void>;
    static login(req: Request, res: Response): Promise<void>;
    static getProfile(req: Request, res: Response, next: Function): Promise<Response<any, Record<string, any>> | undefined>;
    static getAllUsersDummy(_: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=donatur.controller.d.ts.map