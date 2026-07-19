"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryUtil = void 0;
require("dotenv/config");
const cloudinary_1 = require("cloudinary");
const response_error_util_1 = require("./response-error.util");
const http_status_codes_1 = require("http-status-codes");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
class CloudinaryUtil {
    static uploadBuffer(fileBuffer, folder) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary_1.v2.uploader.upload_stream({ folder: folder }, (error, result) => {
                    if (error || !result) {
                        return reject(new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, "Gagal upload gambar"));
                    }
                    resolve(result.secure_url);
                });
                uploadStream.end(fileBuffer);
            });
        });
    }
}
exports.CloudinaryUtil = CloudinaryUtil;
//# sourceMappingURL=cloudinaryutil.js.map