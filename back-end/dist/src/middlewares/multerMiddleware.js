"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterMiddleware = exports.uploadImage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const response_error_util_1 = require("../utils/response-error.util");
const http_status_codes_1 = require("http-status-codes");
const storage = multer_1.default.memoryStorage();
exports.uploadImage = (0, multer_1.default)({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});
class MulterMiddleware {
    constructor(storageType) {
        this.allowedExtensions = [".jpg", ".jpeg", ".png"];
        this.storageType = "diskStorage";
        this.uploadDir = path_1.default.join(process.cwd(), "public/uploads/resi");
        if (storageType) {
            this.storageType = storageType;
        }
        if (this.storageType === "diskStorage" && !fs_1.default.existsSync(this.uploadDir)) {
            fs_1.default.mkdirSync(this.uploadDir, { recursive: true });
        }
    }
    storage() {
        if (this.storageType === "diskStorage") {
            return multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, this.uploadDir);
                },
                filename: (req, file, cb) => {
                    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
                    const fileExtension = path_1.default.extname(file.originalname);
                    cb(null, `resi-${uniqueSuffix}${fileExtension}`);
                },
            });
        }
        return multer_1.default.memoryStorage();
    }
    fileFilter(req, file, cb) {
        const ext = path_1.default.extname(file.originalname).toLowerCase();
        if (this.allowedExtensions.includes(ext)) {
            return cb(null, true);
        }
        return cb(new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE, `Format file tidak valid untuk ${file.originalname}. Hanya boleh .jpg, .jpeg, .png`));
    }
    upload(limitFileSize) {
        return (0, multer_1.default)({
            storage: this.storage(),
            fileFilter: this.fileFilter.bind(this),
            limits: {
                fileSize: limitFileSize,
            },
        });
    }
}
exports.MulterMiddleware = MulterMiddleware;
//# sourceMappingURL=multerMiddleware.js.map