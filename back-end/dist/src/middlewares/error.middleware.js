"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const errorMiddleware = (err, req, res, next) => {
    let status = err.status || err.statusCode;
    let message = err.message || "Internal Server Error";
    if (!status && err instanceof Error) {
        if (message.includes("already registered") ||
            message.includes("already exists")) {
            status = http_status_codes_1.StatusCodes.CONFLICT; // 409
        }
        else if (message.includes("incorrect") ||
            message.includes("Invalid credential")) {
            status = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        }
        else if (message.includes("not found")) {
            status = http_status_codes_1.StatusCodes.NOT_FOUND;
        }
        else if (message.includes("validation") ||
            message.includes("wajib diisi")) {
            status = http_status_codes_1.StatusCodes.BAD_REQUEST;
        }
        else {
            status = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        }
    }
    if (!status || status === http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR) {
        console.error("🔥 [Fatal System Error]:", err);
        status = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
        message = "Internal Server Error";
    }
    return res.status(status).json({
        success: false,
        message: message,
        data: null,
    });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map