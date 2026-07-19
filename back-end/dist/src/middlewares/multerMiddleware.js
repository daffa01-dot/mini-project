"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterMiddleware = exports.uploadImage = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const response_error_util_1 = require("../utils/response-error.util");
const http_status_codes_1 = require("http-status-codes");
exports.uploadImage = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});
class MulterMiddleware {
    constructor() {
        this.allowedExtensions = [".jpg", ".jpeg", ".png"];
    }
    fileFilter(req, file, cb) {
        const ext = path_1.default.extname(file.originalname).toLowerCase();
        if (!this.allowedExtensions.includes(ext)) {
            return cb(new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_ACCEPTABLE, `Format file tidak valid untuk ${file.originalname}. Hanya boleh .jpg, .jpeg, .png`));
        }
        cb(null, true);
    }
    upload(limitFileSize) {
        return (0, multer_1.default)({
            storage: multer_1.default.memoryStorage(),
            fileFilter: this.fileFilter.bind(this),
            limits: {
                fileSize: limitFileSize,
            },
        });
    }
}
exports.MulterMiddleware = MulterMiddleware;
//# sourceMappingURL=multerMiddleware.js.map