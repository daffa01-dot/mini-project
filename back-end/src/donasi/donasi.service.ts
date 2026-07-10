import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";
import { ResponseError } from "../utils/response-error.util";
import { MailerUtil } from "../utils/mailer.util";
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

    const updatedDonasi = await (prisma as any).donasi.update({
      where: { id: donasiId },
      data: { buktiResi: buktiResiPath },
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
    const resultData = await prisma.$transaction(async (tx) => {
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
      };
    });

    // 2. 🟢 INTEGRASI BARU: Render Handlebars (.hbs) & Kirim Email via MailerUtil
    try {
      if (resultData.donatur && resultData.donatur.email) {
        const nominalFormatted = (resultData.nominal || 0).toLocaleString("id-ID");

        // Memanfaatkan TemplateUtil untuk mengompilasi berkas donationmail.hbs Anda
        const htmlBody = TemplateUtil.getHtmlTemplate("donationmail", {
          namaDonatur: resultData.donatur.namaLengkap,
          nominal: nominalFormatted,
          alasanDitolak: statusBaru === "DITOLAK" ? alasanDitolak : null,
          subject: statusBaru === "DIVERIFIKASI" ? "Bukti Donasi Diverifikasi" : "Verifikasi Donasi Ditolak",
        });

        await MailerUtil.sendWithLog({
          userId: resultData.donatur.id,
          emailTo: resultData.donatur.email,
          subject: statusBaru === "DIVERIFIKASI" ? "Hore! Bukti Donasi Anda Telah Diverifikasi" : "Pemberitahuan: Verifikasi Donasi Ditolak",
          body: htmlBody, 
          referenceId: resultData.donasiId,
          type: statusBaru === "DIVERIFIKASI" ? "donasi_berhasil" : "donasi_gagal",
        });
      }
    } catch (mailerError) {
      console.error("[Mailer Integration Error]:", mailerError);
    }

    // 3. Return payload sesuai output awal kontrak service Anda
    return {
      donasiId: resultData.donasiId,
      nominal: resultData.nominal,
      statusBaru: resultData.statusBaru,
      alasanDitolak: resultData.alasanDitolak,
      diverifikasiAt: resultData.diverifikasiAt,
    };
  }

  // ==========================================================
  // GET RIWAYAT UNTUK DONATUR (Donasi Keluar)
  // ==========================================================
  static async getRiwayatDonatur(donaturId: string) {
    if (!donaturId) {
      throw new ResponseError(StatusCodes.BAD_REQUEST, "ID Donatur tidak valid atau tidak terotentikasi");
    }

    return await (prisma as any).donasi.findMany({
      where: { donaturId },
      include: {
        satwa: { select: { nama: true } },
        shelter: { select: { namaShelter: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  // ==========================================================
  // GET RIWAYAT UNTUK MITRA SHELTER (Hanya Donasi Masuk)
  // ==========================================================
  static async getRiwayatShelter(shelterId: string) {
    return await (prisma as any).donasi.findMany({
      where: { shelterId },
      include: {
        donatur: { select: { namaLengkap: true, email: true } }, 
        satwa: { select: { nama: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  // ==========================================================
  // GET RIWAYAT UNTUK ADMIN (Seluruh Transaksi Nasional)
  // ==========================================================
  static async getRiwayatAdmin() {
    return await (prisma as any).donasi.findMany({
      include: {
        donatur: { select: { namaLengkap: true } },
        satwa: { select: { nama: true } },
        shelter: { select: { namaShelter: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  }
}