import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";
import { ResponseError } from "../utils/response-error.util";
import { MailerUtil } from "../utils/mailer.util";
import { TemplateUtil } from "../modules/template/template.util";
import { Status } from "../../generated/prisma";

interface GetRiwayatProps {
  role: string;
  userId: string;
  shelterId?: string;
}

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

type VerifikasiDonasiProps = {
  userId: string;
  donasiId: string;
  statusBaru: Status;
  alasanDitolak?: string;
  shelterId?: string;
};

export class DonasiService {
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
        "Minimal donasi adalah Rp10.000",
      );
    }
    console.log("CHECKOUT PAYLOAD", {
  nominal,
  satwaId,
  shelterId,
  donaturId,
});

    let targetShelterId = shelterId;

    if (satwaId) {
      const satwa = await prisma.satwa.findFirst({
        where: {
          id: satwaId,
          deletedAt: null,
        },
      });

      if (!satwa) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND,
          "Satwa tidak ditemukan.",
        );
      }

      if (shelterId && shelterId !== satwa.shelterId) {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Shelter tidak sesuai dengan satwa.",
        );
      }

      targetShelterId = satwa.shelterId;
    }

    if (!targetShelterId) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        "Shelter ID tidak valid.",
      );
    }

    const shelter = await prisma.shelter.findFirst({
      where: {
        id: targetShelterId,
        deletedAt: null,
      },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Shelter tidak ditemukan.",
      );
    }
    console.log("CREATE DONASI");

    const donasi = await prisma.donasi.create({
      data: {
        nominal,
        catatan: catatan ?? null,
        donaturId,
        shelterId: targetShelterId!,
        satwaId: satwaId ?? null,
        status: "MENUNGGU",
        buktiResi: "",
      },
    });
console.log("DONASI CREATED");
console.log(donasi);

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
  }
  // ==========================================================
  // ALUR 2: UPLOAD BUKTI RESI (OLEH DONATUR)
  // ==========================================================
  static async uploadBuktiResi({
    donasiId,
    donaturId,
    buktiResiPath,
  }: UploadBuktiProps) {
    const donasi = await prisma.donasi.findFirst({
      where: {
        id: donasiId,
        donaturId,
        deletedAt: null,
      },
    });

    if (!donasi) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Data donasi tidak ditemukan.",
      );
    }

    // Donasi harus masih menunggu
    if (donasi.status !== "MENUNGGU") {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        "Donasi sudah diproses dan bukti transfer tidak dapat diubah.",
      );
    }

    // Jangan upload dua kali
    if (donasi.buktiResi) {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        "Bukti transfer sudah pernah diupload.",
      );
    }

    const updated = await prisma.donasi.update({
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
      message:
        "Bukti transfer berhasil diupload dan menunggu verifikasi shelter.",
    };
  }

  static async verifikasiDonasi({
    userId,
    donasiId,
    statusBaru,
    alasanDitolak,
  }: VerifikasiDonasiProps) {
    // Cari shelter berdasarkan user yang login
    const shelter = await prisma.shelter.findFirst({
      where: {
        userId,
        deletedAt: null,
      },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Profil Shelter tidak ditemukan.",
      );
    }

    const resultData = await prisma.$transaction(async (tx) => {
      // Pastikan donasi milik shelter yang sedang login
      const donasi = await tx.donasi.findFirst({
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
        throw new ResponseError(
          StatusCodes.NOT_FOUND,
          "Data donasi tidak ditemukan.",
        );
      }

      // Tidak boleh diproses dua kali
      if (donasi.status !== "MENUNGGU") {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Donasi sudah diproses.",
        );
      }

      // Bukti transfer harus sudah ada
      if (!donasi.buktiResi) {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Donatur belum mengupload bukti transfer.",
        );
      }

      // Jika ditolak wajib ada alasan
      if (statusBaru === "DITOLAK" && !alasanDitolak) {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Alasan penolakan wajib diisi.",
        );
      }

      const updatedDonasi = await tx.donasi.update({
        where: {
          id: donasiId,
        },
        data: {
          status: statusBaru,
          alasanDitolak:
            statusBaru === "DITOLAK" ? (alasanDitolak ?? null) : null,
          diverifikasiAt: new Date(),
        },
      });

      // Jika diverifikasi, tambahkan dana satwa
      if (statusBaru === "DIVERIFIKASI" && updatedDonasi.satwaId) {
        await tx.satwa.update({
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
    });

    // Kirim Email
    try {
      if (resultData.donatur?.email) {
        const nominalFormatted = resultData.nominal.toLocaleString("id-ID");

        const htmlBody = TemplateUtil.getHtmlTemplate("donationmail", {
          namaDonatur: resultData.donatur.namaLengkap,
          nominal: nominalFormatted,
          alasanDitolak: statusBaru === "DITOLAK" ? alasanDitolak : null,
          subject:
            statusBaru === "DIVERIFIKASI"
              ? "Bukti Donasi Diverifikasi"
              : "Verifikasi Donasi Ditolak",
        });

        await MailerUtil.sendWithLog({
          userId: resultData.donatur.id,
          emailTo: resultData.donatur.email,
          subject:
            statusBaru === "DIVERIFIKASI"
              ? "Hore! Bukti Donasi Anda Telah Diverifikasi"
              : "Pemberitahuan: Verifikasi Donasi Ditolak",
          body: htmlBody,
          referenceId: resultData.donasiId,
          type:
            statusBaru === "DIVERIFIKASI" ? "donasi_berhasil" : "donasi_gagal",
        });
      }
    } catch (mailerError) {
      console.error("[Mailer Integration Error]:", mailerError);
    }

    return {
      donasiId: resultData.donasiId,
      nominal: resultData.nominal,
      statusBaru: resultData.statusBaru,
      alasanDitolak: resultData.alasanDitolak,
      diverifikasiAt: resultData.diverifikasiAt,
    };
  }

  static async getRiwayat({ role, userId, shelterId }: GetRiwayatProps) {
    const where: any = {
      deletedAt: null,
    };

    switch (role) {
      case "DONATUR":
        where.donaturId = userId;
        break;

      case "SHELTER": {
        const shelter = await prisma.shelter.findFirst({
          where: {
            userId,
            deletedAt: null,
          },
        });

        if (!shelter) {
          throw new ResponseError(
            StatusCodes.NOT_FOUND,
            "Profil Shelter tidak ditemukan.",
          );
        }

        where.shelterId = shelter.id;
        break;
      }

      case "SUPER_ADMIN":
        break;

      default:
        throw new ResponseError(
          StatusCodes.FORBIDDEN,
          "Role tidak memiliki akses.",
        );
    }
    console.log("ROLE:", role);
    console.log("USER:", userId);
    console.log("SHELTER:", shelterId);

    const result = await prisma.donasi.findMany({
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
  }

  static async deleteDonasi(userId: string, role: string, donasiId: string) {
    // Super Admin boleh menghapus semua donasi
    if (role === "SUPER_ADMIN") {
      const donasi = await prisma.donasi.findFirst({
        where: {
          id: donasiId,
          deletedAt: null,
        },
      });

      if (!donasi) {
        throw new ResponseError(
          StatusCodes.NOT_FOUND,
          "Data donasi tidak ditemukan.",
        );
      }

      // Donasi yang sudah diverifikasi tidak boleh dihapus
      if (donasi.status === "DIVERIFIKASI") {
        throw new ResponseError(
          StatusCodes.BAD_REQUEST,
          "Donasi yang sudah diverifikasi tidak dapat dihapus.",
        );
      }

      return await prisma.donasi.update({
        where: {
          id: donasiId,
        },
        data: {
          deletedAt: new Date(),
        },
      });
    }

    // Cari shelter berdasarkan user login
    const shelter = await prisma.shelter.findFirst({
      where: {
        userId,
        deletedAt: null,
      },
    });

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Profil Shelter tidak ditemukan.",
      );
    }

    // Pastikan donasi milik shelter tersebut
    const donasi = await prisma.donasi.findFirst({
      where: {
        id: donasiId,
        shelterId: shelter.id,
        deletedAt: null,
      },
    });

    if (!donasi) {
      throw new ResponseError(
        StatusCodes.FORBIDDEN,
        "Anda tidak memiliki akses ke donasi ini.",
      );
    }

    // Donasi yang sudah diverifikasi tidak boleh dihapus
    if (donasi.status === "DIVERIFIKASI") {
      throw new ResponseError(
        StatusCodes.BAD_REQUEST,
        "Donasi yang sudah diverifikasi tidak dapat dihapus.",
      );
    }

    return await prisma.donasi.update({
      where: {
        id: donasiId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
  static async getById(donasiId: string) {
    const donasi = await prisma.donasi.findFirst({
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
      throw new ResponseError(StatusCodes.NOT_FOUND, "Donasi tidak ditemukan.");
    }

    return donasi;
  }
}
