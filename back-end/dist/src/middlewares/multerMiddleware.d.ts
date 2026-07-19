import multer, { Multer } from "multer";
export declare const uploadImage: multer.Multer;
export declare class MulterMiddleware {
    private allowedExtensions;
    private fileFilter;
    upload(limitFileSize: number): Multer;
}
//# sourceMappingURL=multerMiddleware.d.ts.map