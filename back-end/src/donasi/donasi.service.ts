import { StatusCodes } from "http-status-codes";
import prisma from "../configs/prisma-client.config";
import { ResponseError } from "../utils/response-error.util";
import { MailerUtil } from "../utils/mailer.util";
import { TemplateUtil } from "../modules/template/template.util";

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

interface VerifikasiDonasiProps {
  donasiId: string;
  statusBaru: "DIVERIFIKASI" | "DITOLAK";
  alasanDitolak?: string;
}

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

    const shelter = (await prisma.shelter.findFirst({
      where: {
        id: targetShelterId,
        deletedAt: null,
      },
    })) as any;

    if (!shelter) {
      throw new ResponseError(
        StatusCodes.NOT_FOUND,
        "Shelter tidak ditemukan.",
      );
    }

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

    return {
      donasiId: donasi.id,
      nominal: donasi.nominal,
      status: donasi.status,
      rekeningTujuan: {
        namaShelter: shelter.namaShelter,
        bank: shelter.namaBank,
        nomorRekening: shelter.nomorRekening,
        atasNama: shelter.atasNamaRekening,
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
    donasiId,
    statusBaru,
    alasanDitolak,
  }: VerifikasiDonasiProps) {
    const resultData = await prisma.$transaction(async (tx) => {
      const donasi = await tx.donasi.findFirst({
        where: {
          id: donasiId,
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
      if (statusBaru === "DIVERIFIKASI") {
        const nominalDonasi =
          updatedDonasi?.nominal || updatedDonasi?.buktiResi || 0;

        if (updatedDonasi.satwaId) {
          const satwa = await tx.satwa.findFirst({
            where: {
              id: updatedDonasi.satwaId,
              deletedAt: null,
            },
          });

          if (satwa) {
            await tx.satwa.update({
              where: {
                id: satwa.id,
              },
              data: {
                danaTerkumpul: {
                  increment: updatedDonasi.nominal,
                },
              },
            });
          }
        }
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

    // 2. 🟢 INTEGRASI BARU: Render Handlebars (.hbs) & Kirim Email via MailerUtil
    try {
      if (resultData.donatur && resultData.donatur.email) {
        const nominalFormatted = (resultData.nominal || 0).toLocaleString(
          "id-ID",
        );

        // Memanfaatkan TemplateUtil untuk mengompilasi berkas donationmail.hbs Anda
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

    // 3. Return payload sesuai output awal kontrak service Anda
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

      case "SHELTER":
        where.shelterId = shelterId;
        break;

      case "SUPER_ADMIN":
        break;

      default:
        throw new ResponseError(
          StatusCodes.FORBIDDEN,
          "Role tidak memiliki akses.",
        );
    }

    return await prisma.donasi.findMany({
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
  }
  static async deleteDonasi(donasiId: string) {
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

    return await prisma.donasi.update({
      where: {
        id: donasiId,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
