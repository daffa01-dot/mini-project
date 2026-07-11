import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";
import { ResponseError } from "../utils/response-error.util";
import { MailerUtil } from "../utils/mailer.util";
import { CloudinaryUtil } from "../utils/cloudinaryutil"; // NEW: cloud helpers
import { TemplateUtil } from "../modules/template/template.util"; // 🟢 Ditambahkan untuk kompilasi hbs
import Mail = require("nodemailer/lib/mailer");

// 1. Interface Properti untuk Parameter Fungsi
interface CreateCheckoutProps {
  nominal: number;
  catatan?: string;
  donaturId: string;
  satwaId?: string;
  shelterId?: string;
}

interface UploadBuktiProps {
  donasiId: string;
  donaturId: string;
  buktiResiPath: string;
  buktiResiPublicId?: string | undefined; // NEW: optional public_id from Cloudinary
}

interface VerifikasiDonasiProps {
  donasiId: string;
  statusBaru: "DIVERIFIKASI" | "DITOLAK";
  alasanDitolak?: string;
}

export class DonasiService {
  // ==========================================================
  // ALUR 1: CHECKOUT (MEMBUAT DRAF DONASI & MENAMPILKAN T&C)
  // ==========================================================
  static async createCheckout({
    nominal,
    catatan,
    donaturId,
    satwaId,
    shelterId,
  }: CreateCheckoutProps) {
    if (nominal < 10000) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        "Minimal donasi adalah Rp 10.000",
      );
    }

    let targetShelterId = shelterId;

    if (satwaId) {
      const satwa = await (prisma as any).satwa.findFirst({
        where: { id: satwaId },
      });

      if (!satwa) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND, 
          "Satwa tidak ditemukan atau ID salah"
        );
      }

      if (shelterId && shelterId !== satwa.shelterId) {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Shelter yang Anda masukkan tidak sesuai dengan shelter pengelola satwa ini"
        );
      }

      targetShelterId = satwa.shelterId;
    }

    const shelter = await (prisma as any).shelter.findFirst({
      where: { id: targetShelterId },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Shelter tujuan tidak ditemukan atau ID salah",
      );
    }

    const createdDonasi = await (prisma as any).donasi.create({
      data: {
        nominal: nominal,
        catatan: catatan || null,
        donaturId: donaturId,
        satwaId: satwaId || null,
        shelterId: targetShelterId,
        buktiResi: "",
        status: "MENUNGGU",
      },
    });

    const namaShelterTujuan = shelter?.namaShelter || shelter?.name || "Shelter Satwa";
    const bankTujuan = shelter?.namaBank || shelter?.bankAccount || "-";
    const noRekTujuan = shelter?.nomorRekening || "";
    const atasNamaTujuan = shelter?.atasNamaRekening || "";

    return {
      donasiId: createdDonasi?.id,
      nominal: createdDonasi?.nominal || createdDonasi?.amount,
      status: createdDonasi?.status,
      rekeningTujuan: {
        namaShelter: namaShelterTujuan,
        bank: bankTujuan,
        nomorRekening: noRekTujuan,
        atasNama: atasNamaTujuan,
      },
      termsAndConditions: [
        "Donasi yang diberikan bersifat sukarela dan tidak dapat ditarik kembali dengan alasan apa pun.",
        "Donatur wajib mengunggah foto bukti resi transfer yang jelas and sah setelah melakukan pembayaran.",
        "Pihak shelter akan memverifikasi mutasi bank Anda secara manual. Status akan berubah setelah disetujui.",
        "Batas waktu unggah bukti resi adalah maksimal 1x24 jam sejak pembuatan instruksi donasi ini.",
      ],
    };
  }

  // ==========================================================
  // ALUR 2: UPLOAD BUKTI RESI (OLEH DONATUR)
  // ==========================================================
  static async uploadBuktiResi({
    donasiId,
    donaturId,
    buktiResiPath,
    buktiResiPublicId,
  }: UploadBuktiProps) {
    const donasi = await (prisma as any).donasi.findFirst({
      where: {
        id: donasiId,
        donaturId: donaturId,
      },
    });

    if (!donasi) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Data transaksi donasi tidak ditemukan atau Anda tidak memiliki akses",
      );
    }

    // NEW: If there is an existing cloud public_id, try to delete the old file
    try {
      if ((donasi as any).buktiResiPublicId) {
        await CloudinaryUtil.deleteByPublicId((donasi as any).buktiResiPublicId);
      }
    } catch (err) {
      // non-fatal: log and continue
      console.error('[Donasi] Failed to delete old buktiResi public_id', err);
    }

    const updatedDonasi = await (prisma as any).donasi.update({
      where: { id: donasiId },
      data: { buktiResi: buktiResiPath, buktiResiPublicId: buktiResiPublicId || null },
    });

    return {
      donasiId: updatedDonasi?.id,
      status: updatedDonasi?.status,
      buktiResi: updatedDonasi?.buktiResi,
      message: "Bukti resi transfer berhasil diunggah, menunggu verifikasi pihak shelter.",
    };
  }

  // ==========================================================
  // ALUR 3: VERIFIKASI / APPROVAL (MENGGUNAKAN ATOMIC TRANSACTION)
  // ==========================================================
  static async verifikasiDonasi({
    donasiId,
    statusBaru,
    alasanDitolak,
  }: VerifikasiDonasiProps) {
    // 1. Eksekusi database update via $transaction
    const resultData: any = await prisma.$transaction(async (tx): Promise<any> => {
      // NEW: include related shelter & satwa so email template can show richer data
      const donasi = await (tx as any).donasi.findFirst({
        where: { id: donasiId },
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
              namaShelter: true,
            },
          },
          satwa: {
            select: {
              nama: true,
            },
          },
        },
      });

      if (!donasi) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND,
          "Data donasi tidak ditemukan",
        );
      }

      if (statusBaru === "DITOLAK" && !alasanDitolak) {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Alasan penolakan wajib diisi jika status donasi DITOLAK",
        );
      }

      const updatedDonasi = await (tx as any).donasi.update({
        where: { id: donasiId },
        data: {
          status: statusBaru,
          alasanDitolak: statusBaru === "DITOLAK" ? alasanDitolak : null,
          diverifikasiAt: new Date(),
        },
      });

      if (statusBaru === "DIVERIFIKASI") {
        const nominalDonasi = updatedDonasi?.nominal || updatedDonasi?.amount || 0;

        if (updatedDonasi.satwaId) {
          await (tx as any).satwa.update({
            where: { id: updatedDonasi.satwaId },
            data: {
              danaTerkumpul: { increment: nominalDonasi },
            },
          });
        }
      }

      return {
        donasiId: updatedDonasi?.id,
        nominal: updatedDonasi?.nominal || updatedDonasi?.amount,
        statusBaru: updatedDonasi?.status,
        alasanDitolak: updatedDonasi?.alasanDitolak,
        diverifikasiAt: updatedDonasi?.diverifikasiAt,
        donatur: donasi.donatur,
        // NEW: include related shelter and satwa for downstream usage (email template, etc.)
        shelter: donasi.shelter || null,
        satwa: donasi.satwa || null,
      };
    });

    // 2. 🟢 INTEGRASI BARU: Render Handlebars (.hbs) & Kirim Email via MailerUtil
    const rd: any = resultData; // NEW: safe cast for template usage
    try {
      if (rd.donatur && rd.donatur.email) {
        const nominalFormatted = (rd.nominal || 0).toLocaleString("id-ID");

        // NEW: Provide template variables that match donationmail.hbs (donasiId, tanggal, name, namaShelter, nominal)
        const tanggal = rd.diverifikasiAt
          ? new Date(rd.diverifikasiAt).toLocaleString('id-ID')
          : new Date().toLocaleString('id-ID');

        const shelterObj: any = (resultData as any)['shelter'];
        const namaShelter = shelterObj && (shelterObj as any)['namaShelter'] ? (shelterObj as any)['namaShelter'] : "-";

        const htmlBody = TemplateUtil.getHtmlTemplate("donationmail", {
          donasiId: (resultData as any)['donasiId'],
          tanggal,
          name: (resultData as any)['donatur']?.['namaLengkap'],
          namaShelter,
          nominal: nominalFormatted,
          alasanDitolak: statusBaru === "DITOLAK" ? alasanDitolak : null,
          subject: statusBaru === "DIVERIFIKASI" ? "Bukti Donasi Diverifikasi" : "Verifikasi Donasi Ditolak",
        });

        await MailerUtil.sendWithLog({
          userId: rd.donatur.id,
          emailTo: rd.donatur.email,
          subject: statusBaru === "DIVERIFIKASI" ? "Hore! Bukti Donasi Anda Telah Diverifikasi" : "Pemberitahuan: Verifikasi Donasi Ditolak",
          body: htmlBody,
          referenceId: rd.donasiId,
          type: statusBaru === "DIVERIFIKASI" ? "donasi_berhasil" : "donasi_gagal",
        });
      }
    } catch (mailerError) {
      console.error("[Mailer Integration Error]:", mailerError);
    }

    // 3. Return payload sesuai output awal kontrak service Anda
    return {
      donasiId: rd.donasiId,
      nominal: rd.nominal,
      statusBaru: rd.statusBaru,
      alasanDitolak: rd.alasanDitolak,
      diverifikasiAt: rd.diverifikasiAt,
    };
  }

  // ==========================================================
  // GET RIWAYAT UNTUK DONATUR (Donasi Keluar)
  // ==========================================================
  static async getRiwayatDonatur(donaturId: string, page = 1, perPage = 10) {
    if (!donaturId) {
      throw new ResponseError(StatusCodes.BAD_REQUEST, "ID Donatur tidak valid atau tidak terotentikasi");
    }

    const currentPage = Math.max(1, page);
    const currentPerPage = Math.max(1, Math.min(perPage, 100));

    const whereQuery = { donaturId };
    const total = await (prisma as any).donasi.count({ where: whereQuery });
    const data = await (prisma as any).donasi.findMany({
      where: whereQuery,
      include: {
        satwa: { select: { nama: true } },
        shelter: { select: { namaShelter: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip: (currentPage - 1) * currentPerPage,
      take: currentPerPage,
    });

    const totalPages = currentPerPage > 0 ? Math.ceil(total / currentPerPage) : 0;
    return {
      data,
      meta: {
        total,
        page: currentPage,
        perPage: currentPerPage,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
      },
    };
  }

  // ==========================================================
  // GET RIWAYAT UNTUK MITRA SHELTER (Hanya Donasi Masuk)
  // ==========================================================
  static async getRiwayatShelter(shelterId: string, page = 1, perPage = 10) {
    const currentPage = Math.max(1, page);
    const currentPerPage = Math.max(1, Math.min(perPage, 100));

    const whereQuery = { shelterId };
    const total = await (prisma as any).donasi.count({ where: whereQuery });
    const data = await (prisma as any).donasi.findMany({
      where: whereQuery,
      include: {
        donatur: { select: { namaLengkap: true, email: true } }, 
        satwa: { select: { nama: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip: (currentPage - 1) * currentPerPage,
      take: currentPerPage,
    });

    const totalPages = currentPerPage > 0 ? Math.ceil(total / currentPerPage) : 0;
    return {
      data,
      meta: {
        total,
        page: currentPage,
        perPage: currentPerPage,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
      },
    };
  }

  // ==========================================================
  // GET RIWAYAT UNTUK ADMIN (Seluruh Transaksi Nasional)
  // ==========================================================
  static async getRiwayatAdmin(page = 1, perPage = 10) {
    const currentPage = Math.max(1, page);
    const currentPerPage = Math.max(1, Math.min(perPage, 100));

    const total = await (prisma as any).donasi.count({});
    const data = await (prisma as any).donasi.findMany({
      include: {
        donatur: { select: { namaLengkap: true } },
        satwa: { select: { nama: true } },
        shelter: { select: { namaShelter: true } }
      },
      orderBy: { createdAt: 'desc' },
      skip: (currentPage - 1) * currentPerPage,
      take: currentPerPage,
    });

    const totalPages = currentPerPage > 0 ? Math.ceil(total / currentPerPage) : 0;
    return {
      data,
      meta: {
        total,
        page: currentPage,
        perPage: currentPerPage,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1,
      },
    };
  }
}
