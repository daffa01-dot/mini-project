"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODEMAILER_GOOGLE_APP_USER_EMAIL = exports.NODEMAILER_GOOGLE_APP_PASSWORD = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_CLOUD_NAME = exports.JWT_VERIFICATION_EXPIRES_IN = exports.JWT_SECRET_VERIFICATION_KEY = exports.JWT_EXPIRES_IN = exports.JWT_SECRET_KEY = exports.WHITE_LIST = exports.API_PREFIX = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = parseInt(process.env.PORT) || 8001;
exports.API_PREFIX = process.env.API_PREFIX;
exports.WHITE_LIST = (_a = process.env.WHITE_LIST) === null || _a === void 0 ? void 0 : _a.split(','); // ["localhost:3000", "localhost:5173"]
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
exports.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
exports.JWT_SECRET_VERIFICATION_KEY = 'abc12345';
exports.JWT_VERIFICATION_EXPIRES_IN = '1h';
exports.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
exports.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
exports.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
exports.NODEMAILER_GOOGLE_APP_PASSWORD = process.env.NODEMAILER_GOOGLE_APP_PASSWORD;
exports.NODEMAILER_GOOGLE_APP_USER_EMAIL = process.env.NODEMAILER_GOOGLE_APP_USER_EMAIL;
//# sourceMappingURL=env.configs.js.map