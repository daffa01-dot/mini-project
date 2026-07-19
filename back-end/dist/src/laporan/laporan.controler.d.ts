import { Request, Response, NextFunction } from "express";
export declare class LaporanController {
    static create(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    static getBySatwa(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static getDetail(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static update(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static delete(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=laporan.controler.d.ts.map