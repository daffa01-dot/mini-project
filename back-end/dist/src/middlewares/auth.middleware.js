"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const response_error_util_1 = require("../utils/response-error.util");
const http_status_codes_1 = require("http-status-codes");
class AuthMiddleware {
    static authenticated(secretKey) {
        return (req, res, next) => {
            try {
                console.log("DEBUG URL:", req.originalUrl);
                let token;
                const authHeader = req.headers.authorization;
                if (authHeader && authHeader.startsWith("Bearer ")) {
                    token = authHeader.split(" ")[1];
                }
                else if (req.cookies && req.cookies.token) {
                    token = req.cookies.token;
                }
                if (!token) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.UNAUTHORIZED, "Token must be provided");
                }
                const payload = jwt_1.JWTUtil.verifyToken(token);
                console.log("PAYLOAD JWT:", payload);
                res.locals.payload = payload;
                next();
            }
            catch (error) {
                next(error);
            }
        };
    }
    static authorized(allowedRoles) {
        return (req, res, next) => {
            try {
                const payload = res.locals.payload;
                if (!payload || !allowedRoles.includes(payload.role)) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Unauthorized user role");
                }
                next();
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map