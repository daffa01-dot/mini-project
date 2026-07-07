import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";
import { ResponseError } from "../utils/response-error.util";

// 1. Interface Properti untuk Parameter Fungsi (Sesuai Gaya Referensi Anda)
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

    // Jika donatur memilih satwa tertentu, cari shelter pemilik satwa tersebut
    if (satwaId) {
      const satwa = await (prisma as any).satwa.findFirst({
        where: { id: satwaId },
      });

      if (!satwa) {
        throw new ResponseError(StatusCodes.NOT_FOUND, "Satwa tidak ditemukan");
      }

      targetShelterId = satwa.shelterId;
    }

    if (!targetShelterId) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        "Shelter ID tujuan donasi harus ditentukan jika tidak memilih satwa",
      );
    }

    // Ambil detail rekening bank milik shelter
    const shelter = await (prisma as any).shelter.findFirst({
      where: { id: targetShelterId },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Shelter tujuan tidak ditemukan",
      );
    }

    // Buat data donasi awal dengan status MENUNGGU dan buktiResi kosong
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

    // Menangani kompatibilitas cache properti lama vs baru
    const namaShelterTujuan =
      shelter?.namaShelter || shelter?.name || "Shelter Satwa";
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
        "Donatur wajib mengunggah foto bukti resi transfer yang jelas dan sah setelah melakukan pembayaran.",
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
    // Cari data donasi untuk memastikan donasi ini ada dan memang milik donatur yang login
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

    // Update kolom buktiResi dengan path/URL file gambar resi yang baru diupload
    const updatedDonasi = await (prisma as any).donasi.update({
      where: {
        id: donasiId,
      },
      data: {
        buktiResi: buktiResiPath,
      },
    });

    return {
      donasiId: updatedDonasi?.id,
      status: updatedDonasi?.status,
      buktiResi: updatedDonasi?.buktiResi,
      message:
        "Bukti resi transfer berhasil diunggah, menunggu verifikasi pihak shelter.",
    };
  }

  // ==========================================================
  // ALUR 3: VERIFIKASI / APPROVAL (OLEH PIHAK SHELTER ATAU ADMIN)
  // ==========================================================
  static async verifikasiDonasi({
    donasiId,
    statusBaru,
    alasanDitolak,
  }: VerifikasiDonasiProps) {
    // Cari data donasi yang akan diverifikasi
    const donasi = await (prisma as any).Donasi.findFirst({
      where: { id: donasiId },
    });

    if (!donasi) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Data donasi tidak ditemukan",
      );
    }

    // Validasi aturan bisnis: Jika ditolak, alasan penolakan wajib diisi
    if (statusBaru === "DITOLAK" && !alasanDitolak) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        "Alasan penolakan wajib diisi jika status donasi DITOLAK",
      );
    }

    // Update status donasi beserta log audit trail pengamanan finansial
    const updatedDonasi = await (prisma as any).donasi.update({
      where: {
        id: donasiId,
      },
      data: {
        status: statusBaru,
        alasanDitolak: statusBaru === "DITOLAK" ? alasanDitolak : null,
        diverifikasiAt: new Date(), // Rekam waktu penyetujuan/penolakan dana
      },
    });

    return {
      donasiId: updatedDonasi?.id,
      nominal: updatedDonasi?.nominal || updatedDonasi?.amount,
      statusBaru: updatedDonasi?.status,
      alasanDitolak: updatedDonasi?.alasanDitolak,
      diverifikasiAt: updatedDonasi?.diverifikasiAt,
    };
  }
}
