import multer, { Multer } from "multer";
export declare const uploadImage: multer.Multer;
export declare class MulterMiddleware {
    private allowedExtensions;
    private storageType;
    private uploadDir;
    constructor(storageType?: "diskStorage" | "memoryStorage");
    private storage;
    private fileFilter;
    upload(limitFileSize: number): Multer;
}
//# sourceMappingURL=multerMiddleware.d.ts.map