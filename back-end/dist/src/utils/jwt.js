"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTUtil = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_configs_1 = require("../configs/env.configs");
class JWTUtil {
    // 2. Ganti 'any' dengan 'JWTPayload' demi type-safety
    static signToken(payload) {
        return jsonwebtoken_1.default.sign(Object.assign({}, payload), env_configs_1.JWT_SECRET_KEY, {
            expiresIn: env_configs_1.JWT_EXPIRES_IN,
        });
    }
    static signVerificationToken(payload) {
        return jsonwebtoken_1.default.sign(Object.assign({}, payload), env_configs_1.JWT_SECRET_VERIFICATION_KEY, {
            expiresIn: env_configs_1.JWT_VERIFICATION_EXPIRES_IN,
        });
    }
    // 3. Berikan return type yang jelas saat verify token dilakukan
    static verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, env_configs_1.JWT_SECRET_KEY);
    }
}
exports.JWTUtil = JWTUtil;
//# sourceMappingURL=jwt.js.map