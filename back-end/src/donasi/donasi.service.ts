import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";
import { ResponseError } from "../utils/response-error.util";

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

    // -------------------------------------------------------
    // KONDISI 1: JIKA USER MENGINPUT SATWA ID
    // -------------------------------------------------------
    if (satwaId) {
      // Cari data satwa di database
      const satwa = await (prisma as any).satwa.findFirst({
        where: { id: satwaId },
      });

      // JIKA SATWA ID NGAWUR -> AUTO TOLAK (404)!
      if (!satwa) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND, 
          "Satwa tidak ditemukan atau ID salah"
        );
      }

      // JIKA USER JUGA MENGINPUT SHELTER ID, TAPI TIDAK COCOK DENGAN PEMILIK SATWA -> AUTO TOLAK (400)!
      if (shelterId && shelterId !== satwa.shelterId) {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Shelter yang Anda masukkan tidak sesuai dengan shelter pengelola satwa ini"
        );
      }

      // Gunakan shelterId asli yang terikat pada data satwa tersebut
      targetShelterId = satwa.shelterId;
    }

    // -------------------------------------------------------
    // KONDISI 2: VALIDASI JARING PENGAMAN SHELTER ID
    // -------------------------------------------------------
    // Cari data shelter di database untuk memastikan ID benar-benar eksis (Anti-ID Ngawur)
    const shelter = await (prisma as any).shelter.findFirst({
      where: { id: targetShelterId },
    });

    // JIKA SHELTER ID NGAWUR (BAIK PADA DONASI UMUM / DONASI SATWA) -> AUTO TOLAK (404)!
    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Shelter tujuan tidak ditemukan atau ID salah",
      );
    }

    // Buat data donasi awal dengan status MENUNGGU jika semua ID lolos sensor validasi
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
  // ALUR 3: VERIFIKASI / APPROVAL (MENGGUNAKAN ATOMIC TRANSACTION)
  // ==========================================================
  static async verifikasiDonasi({
    donasiId,
    statusBaru,
    alasanDitolak,
  }: VerifikasiDonasiProps) {
    return await prisma.$transaction(async (tx) => {
      const donasi = await (tx as any).donasi.findFirst({
        where: { id: donasiId },
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
        where: {
          id: donasiId,
        },
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
              danaTerkumpul: {
                increment: nominalDonasi,
              },
            },
          });
        } else if (updatedDonasi.shelterId) {
          await (tx as any).shelter.update({
            where: { id: updatedDonasi.shelterId },
            data: {
              danaTerkumpul: {
                increment: nominalDonasi,
              },
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
      };
    });
  }
  static async getRiwayatDonatur(donaturId: string) {
  if (!donaturId) {
    throw new ResponseError(StatusCodes.BAD_REQUEST, "ID Donatur tidak valid atau tidak terotentikasi");
  }

  return await (prisma as any).donasi.findMany({
    where: { donaturId },
    include: {
      satwa: { select: { nama: true } },
      shelter: { select: { namaShelter: true } } // Diubah: Hanya memanggil namaShelter
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
      // Pastikan nama relasi 'user' atau 'donatur' sesuai skema Anda. 
      // Jika error, sesuaikan select di bawah ini dengan kolom user Anda (misal: namaLengkap atau name)
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
      shelter: { select: { namaShelter: true } } // Diubah: Hanya memanggil namaShelter
    },
    orderBy: { createdAt: 'desc' }
  });
}
}