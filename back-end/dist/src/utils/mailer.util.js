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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerUtil = void 0;
const nodemailer_config_1 = __importDefault(require("../configs/nodemailer.config"));
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
class MailerUtil {
    static sendMail(_a) {
        return __awaiter(this, arguments, void 0, function* ({ to, subject, html }) {
            return yield nodemailer_config_1.default.sendMail({
                to,
                subject,
                html,
            });
        });
    }
    static sendWithLog(_a) {
        return __awaiter(this, arguments, void 0, function* ({ userId, emailTo, subject, body, referenceId, type, }) {
            let logRecord = null;
            try {
                logRecord = yield prisma_client_config_1.default.mailerLog.create({
                    data: {
                        userId: userId || null,
                        emailTo,
                        subject,
                        body,
                        referenceId: referenceId || null,
                        referenceType: "donasi",
                        type,
                        status: "pending",
                    },
                });
            }
            catch (dbError) {
                console.error("[Mailer Log Error]: Gagal membuat baris log awal di database", dbError);
            }
            nodemailer_config_1.default
                .sendMail({
                from: process.env.NODEMAILER_GOOGLE_APP_USER_EMAIL ||
                    '"Teman Asuh" <no-reply@temanasuh.org>',
                to: emailTo,
                subject: subject,
                html: body,
            })
                .then(() => __awaiter(this, void 0, void 0, function* () {
                if (logRecord) {
                    yield prisma_client_config_1.default.mailerLog.update({
                        where: { id: logRecord.id },
                        data: {
                            status: "success",
                            sentAt: new Date(),
                        },
                    });
                }
                console.log(`[Mailer Success]: Email notifikasi berhasil dikirim ke ${emailTo}`);
            }))
                .catch((smtpError) => __awaiter(this, void 0, void 0, function* () {
                if (logRecord) {
                    yield prisma_client_config_1.default.mailerLog.update({
                        where: { id: logRecord.id },
                        data: {
                            status: "failed",
                            errorMessage: smtpError.message || "SMTP Server Error",
                        },
                    });
                }
                console.error(`[Mailer Failed]: Gagal mengirim email ke ${emailTo}. Alasan:`, smtpError.message);
            }));
            return logRecord;
        });
    }
}
exports.MailerUtil = MailerUtil;
exports.default = MailerUtil;
//# sourceMappingURL=mailer.util.js.map