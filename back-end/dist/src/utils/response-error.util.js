"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseError = void 0;
class ResponseError extends Error {
    getStatusCode() {
        throw new Error("Method not implemented.");
    }
    constructor(statusCode, message) {
        super(message);
        this.isExpose = true;
        this.statusCode = statusCode;
    }
}
exports.ResponseError = ResponseError;
//# sourceMappingURL=response-error.util.js.map