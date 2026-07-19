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
exports.DonasiService = void 0;
const http_status_codes_1 = require("http-status-codes");
const prisma_client_config_1 = __importDefault(require("../configs/prisma-client.config"));
const response_error_util_1 = require("../utils/response-error.util");
const mailer_util_1 = require("../utils/mailer.util");
const template_util_1 = require("../modules/template/template.util");
class DonasiService {
    static createCheckout(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nominal, catatan, donaturId, satwaId, shelterId, }) {
            var _b;
            if (nominal < 10000) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Minimal donasi adalah Rp10.000");
            }
            console.log("CHECKOUT PAYLOAD", {
                nominal,
                satwaId,
                shelterId,
                donaturId,
            });
            let targetShelterId = shelterId;
            if (satwaId) {
                const satwa = yield prisma_client_config_1.default.satwa.findFirst({
                    where: {
                        id: satwaId,
                        deletedAt: null,
                    },
                });
                if (!satwa) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Satwa tidak ditemukan.");
                }
                if (shelterId && shelterId !== satwa.shelterId) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Shelter tidak sesuai dengan satwa.");
                }
                targetShelterId = satwa.shelterId;
            }
            if (!targetShelterId) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Shelter ID tidak valid.");
            }
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                where: {
                    id: targetShelterId,
                    deletedAt: null,
                },
            });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Shelter tidak ditemukan.");
            }
            console.log("CREATE DONASI");
            const donasi = yield prisma_client_config_1.default.donasi.create({
                data: {
                    nominal,
                    catatan: catatan !== null && catatan !== void 0 ? catatan : null,
                    donaturId,
                    shelterId: targetShelterId,
                    satwaId: satwaId !== null && satwaId !== void 0 ? satwaId : null,
                    status: "MENUNGGU",
                    buktiResi: "",
                },
            });
            const donatur = yield prisma_client_config_1.default.user.findUnique({
                where: {
                    id: donaturId,
                },
            });
            const satwa = satwaId
                ? yield prisma_client_config_1.default.satwa.findUnique({
                    where: {
                        id: satwaId,
                    },
                })
                : null;
            if (donatur === null || donatur === void 0 ? void 0 : donatur.email) {
                const htmlBody = template_util_1.TemplateUtil.getHtmlTemplate("donationmail", {
                    subject: "Invoice Donasi Teman Asuh",
                    namaDonatur: donatur.namaLengkap,
                    nominal: donasi.nominal.toLocaleString("id-ID"),
                    namaShelter: shelter.namaShelter,
                    namaSatwa: (_b = satwa === null || satwa === void 0 ? void 0 : satwa.nama) !== null && _b !== void 0 ? _b : "-",
                    status: donasi.status,
                    catatan: catatan !== null && catatan !== void 0 ? catatan : "-",
                });
                console.log("=== MASUK KE SEND MAIL ===");
                console.log({
                    userId: donatur === null || donatur === void 0 ? void 0 : donatur.id,
                    email: donatur === null || donatur === void 0 ? void 0 : donatur.email,
                    donasiId: donasi.id,
                });
                yield mailer_util_1.MailerUtil.sendWithLog({
                    userId: donatur.id,
                    emailTo: donatur.email,
                    subject: "Invoice Donasi Teman Asuh",
                    body: htmlBody,
                    referenceId: donasi.id,
                    type: "donasi_berhasil",
                });
            }
            return {
                donasiId: donasi.id,
                nominal: donasi.nominal,
                status: donasi.status,
                rekeningTujuan: {
                    namaShelter: shelter.namaShelter,
                    noWhatsapp: shelter.noWhatsapp,
                },
                termsAndConditions: [
                    "Donasi bersifat sukarela.",
                    "Donasi tidak dapat dibatalkan.",
                    "Unggah bukti transfer maksimal 1x24 jam.",
                    "Shelter akan memverifikasi pembayaran secara manual.",
                ],
            };
        });
    }
    // ==========================================================
    // ALUR 2: UPLOAD BUKTI RESI (OLEH DONATUR)
    // ==========================================================
    static uploadBuktiResi(_a) {
        return __awaiter(this, arguments, void 0, function* ({ donasiId, donaturId, buktiResiPath, }) {
            const donasi = yield prisma_client_config_1.default.donasi.findFirst({
                where: {
                    id: donasiId,
                    donaturId,
                    deletedAt: null,
                },
            });
            if (!donasi) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Data donasi tidak ditemukan.");
            }
            // Donasi harus masih menunggu
            if (donasi.status !== "MENUNGGU") {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Donasi sudah diproses dan bukti transfer tidak dapat diubah.");
            }
            // Jangan upload dua kali
            if (donasi.buktiResi) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Bukti transfer sudah pernah diupload.");
            }
            const updated = yield prisma_client_config_1.default.donasi.update({
                where: {
                    id: donasiId,
                },
                data: {
                    buktiResi: buktiResiPath,
                },
            });
            return {
                donasiId: updated.id,
                status: updated.status,
                buktiResi: updated.buktiResi,
                message: "Bukti transfer berhasil diupload dan menunggu verifikasi shelter.",
            };
        });
    }
    static verifikasiDonasi(_a) {
        return __awaiter(this, arguments, void 0, function* ({ userId, donasiId, statusBaru, alasanDitolak, }) {
            var _b;
            // Cari shelter berdasarkan user yang login
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                where: {
                    userId,
                    deletedAt: null,
                },
            });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Profil Shelter tidak ditemukan.");
            }
            const resultData = yield prisma_client_config_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                // Pastikan donasi milik shelter yang sedang login
                const donasi = yield tx.donasi.findFirst({
                    where: {
                        id: donasiId,
                        shelterId: shelter.id,
                        deletedAt: null,
                    },
                    include: {
                        donatur: {
                            select: {
                                id: true,
                                namaLengkap: true,
                                email: true,
                            },
                        },
                    },
                });
                if (!donasi) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Data donasi tidak ditemukan.");
                }
                // Tidak boleh diproses dua kali
                if (donasi.status !== "MENUNGGU") {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Donasi sudah diproses.");
                }
                // Bukti transfer harus sudah ada
                if (!donasi.buktiResi) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Donatur belum mengupload bukti transfer.");
                }
                // Jika ditolak wajib ada alasan
                if (statusBaru === "DITOLAK" && !alasanDitolak) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Alasan penolakan wajib diisi.");
                }
                const updatedDonasi = yield tx.donasi.update({
                    where: {
                        id: donasiId,
                    },
                    data: {
                        status: statusBaru,
                        alasanDitolak: statusBaru === "DITOLAK" ? (alasanDitolak !== null && alasanDitolak !== void 0 ? alasanDitolak : null) : null,
                        diverifikasiAt: new Date(),
                    },
                });
                // Jika diverifikasi, tambahkan dana satwa
                if (statusBaru === "DIVERIFIKASI" && updatedDonasi.satwaId) {
                    yield tx.satwa.update({
                        where: {
                            id: updatedDonasi.satwaId,
                        },
                        data: {
                            danaTerkumpul: {
                                increment: updatedDonasi.nominal,
                            },
                        },
                    });
                }
                return {
                    donasiId: updatedDonasi.id,
                    nominal: updatedDonasi.nominal,
                    statusBaru: updatedDonasi.status,
                    alasanDitolak: updatedDonasi.alasanDitolak,
                    diverifikasiAt: updatedDonasi.diverifikasiAt,
                    donatur: donasi.donatur,
                };
            }));
            // Kirim Email
            try {
                if ((_b = resultData.donatur) === null || _b === void 0 ? void 0 : _b.email) {
                    const nominalFormatted = resultData.nominal.toLocaleString("id-ID");
                    const htmlBody = template_util_1.TemplateUtil.getHtmlTemplate("donationmail", {
                        namaDonatur: resultData.donatur.namaLengkap,
                        nominal: nominalFormatted,
                        alasanDitolak: statusBaru === "DITOLAK" ? alasanDitolak : null,
                        subject: statusBaru === "DIVERIFIKASI"
                            ? "Bukti Donasi Diverifikasi"
                            : "Verifikasi Donasi Ditolak",
                    });
                    yield mailer_util_1.MailerUtil.sendWithLog({
                        userId: resultData.donatur.id,
                        emailTo: resultData.donatur.email,
                        subject: statusBaru === "DIVERIFIKASI"
                            ? "Hore! Bukti Donasi Anda Telah Diverifikasi"
                            : "Pemberitahuan: Verifikasi Donasi Ditolak",
                        body: htmlBody,
                        referenceId: resultData.donasiId,
                        type: statusBaru === "DIVERIFIKASI" ? "donasi_berhasil" : "donasi_gagal",
                    });
                }
            }
            catch (mailerError) {
                console.error("[Mailer Integration Error]:", mailerError);
            }
            return {
                donasiId: resultData.donasiId,
                nominal: resultData.nominal,
                statusBaru: resultData.statusBaru,
                alasanDitolak: resultData.alasanDitolak,
                diverifikasiAt: resultData.diverifikasiAt,
            };
        });
    }
    static getRiwayat(_a) {
        return __awaiter(this, arguments, void 0, function* ({ role, userId, shelterId }) {
            const where = {
                deletedAt: null,
            };
            switch (role) {
                case "DONATUR":
                    where.donaturId = userId;
                    break;
                case "SHELTER": {
                    const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                        where: {
                            userId,
                            deletedAt: null,
                        },
                    });
                    if (!shelter) {
                        throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Profil Shelter tidak ditemukan.");
                    }
                    where.shelterId = shelter.id;
                    break;
                }
                case "SUPER_ADMIN":
                    break;
                default:
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Role tidak memiliki akses.");
            }
            console.log("ROLE:", role);
            console.log("USER:", userId);
            console.log("SHELTER:", shelterId);
            const result = yield prisma_client_config_1.default.donasi.findMany({
                where,
                include: {
                    donatur: {
                        select: {
                            id: true,
                            namaLengkap: true,
                            email: true,
                        },
                    },
                    shelter: {
                        select: {
                            id: true,
                            namaShelter: true,
                        },
                    },
                    satwa: {
                        select: {
                            id: true,
                            nama: true,
                            foto: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
            console.log("WHERE:", where);
            console.log("TOTAL DONASI:", result.length);
            console.log("RESULT:", result);
            return result;
        });
    }
    static deleteDonasi(userId, role, donasiId) {
        return __awaiter(this, void 0, void 0, function* () {
            // Super Admin boleh menghapus semua donasi
            if (role === "SUPER_ADMIN") {
                const donasi = yield prisma_client_config_1.default.donasi.findFirst({
                    where: {
                        id: donasiId,
                        deletedAt: null,
                    },
                });
                if (!donasi) {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Data donasi tidak ditemukan.");
                }
                // Donasi yang sudah diverifikasi tidak boleh dihapus
                if (donasi.status === "DIVERIFIKASI") {
                    throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Donasi yang sudah diverifikasi tidak dapat dihapus.");
                }
                return yield prisma_client_config_1.default.donasi.update({
                    where: {
                        id: donasiId,
                    },
                    data: {
                        deletedAt: new Date(),
                    },
                });
            }
            // Cari shelter berdasarkan user login
            const shelter = yield prisma_client_config_1.default.shelter.findFirst({
                where: {
                    userId,
                    deletedAt: null,
                },
            });
            if (!shelter) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Profil Shelter tidak ditemukan.");
            }
            // Pastikan donasi milik shelter tersebut
            const donasi = yield prisma_client_config_1.default.donasi.findFirst({
                where: {
                    id: donasiId,
                    shelterId: shelter.id,
                    deletedAt: null,
                },
            });
            if (!donasi) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.FORBIDDEN, "Anda tidak memiliki akses ke donasi ini.");
            }
            // Donasi yang sudah diverifikasi tidak boleh dihapus
            if (donasi.status === "DIVERIFIKASI") {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.BAD_REQUEST, "Donasi yang sudah diverifikasi tidak dapat dihapus.");
            }
            return yield prisma_client_config_1.default.donasi.update({
                where: {
                    id: donasiId,
                },
                data: {
                    deletedAt: new Date(),
                },
            });
        });
    }
    static getById(donasiId) {
        return __awaiter(this, void 0, void 0, function* () {
            const donasi = yield prisma_client_config_1.default.donasi.findFirst({
                where: {
                    id: donasiId,
                    deletedAt: null,
                },
                include: {
                    donatur: true,
                    shelter: true,
                    satwa: true,
                },
            });
            if (!donasi) {
                throw new response_error_util_1.ResponseError(http_status_codes_1.StatusCodes.NOT_FOUND, "Donasi tidak ditemukan.");
            }
            return donasi;
        });
    }
}
exports.DonasiService = DonasiService;
//# sourceMappingURL=donasi.service.js.map