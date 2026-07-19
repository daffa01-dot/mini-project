"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const http_status_codes_1 = require("http-status-codes");
const auth_route_1 = __importDefault(require("./features/auth.route"));
const donatur_route_1 = __importDefault(require("./donatur/donatur-route"));
const donasi_route_1 = __importDefault(require("./donasi/donasi.route"));
const laporan_route_1 = __importDefault(require("./laporan/laporan.route"));
const satwa_route_1 = __importDefault(require("./satwa/satwa.route"));
const dashboard_route_1 = __importDefault(require("./dashboard/dashboard.route"));
const shelter_route_1 = __importDefault(require("./shelter/shelter.route"));
const env_configs_1 = require("./configs/env.configs");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: env_configs_1.WHITE_LIST,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));
app.use("/uploads", express_1.default.static(path_1.default.join(process.cwd(), "public/uploads")));
console.log("API_PREFIX =", env_configs_1.API_PREFIX);
app.use((req, _res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});
app.use(express_1.default.json());
app.get("/tes", (_req, res) => {
    res.json({ ok: true });
});
app.use((0, cookie_parser_1.default)());
app.get("/tes", (_req, res) => {
    res.json({ ok: true });
});
app.use(`${env_configs_1.API_PREFIX}/auth`, auth_route_1.default);
app.use(`${env_configs_1.API_PREFIX}/donatur`, donatur_route_1.default);
app.use(`${env_configs_1.API_PREFIX}/donasi`, donasi_route_1.default);
app.use(`${env_configs_1.API_PREFIX}/laporan`, laporan_route_1.default);
app.use(`${env_configs_1.API_PREFIX}/satwa`, satwa_route_1.default);
app.use("/api/v1/dashboard", dashboard_route_1.default);
app.use("/api/v1/shelter", shelter_route_1.default);
app.use(`${env_configs_1.API_PREFIX}/src/uploads`, express_1.default.static(path_1.default.join(__dirname, "uploads")));
app.use(`${env_configs_1.API_PREFIX}/uploads`, express_1.default.static(path_1.default.join(process.cwd(), "public/uploads")));
app.get("/ping", (_, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).json({ message: "pong" });
});
app.use((err, _, res, __) => {
    res.status((err === null || err === void 0 ? void 0 : err.status) || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: (err === null || err === void 0 ? void 0 : err.message) || "Internal Server Error",
        data: null,
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map