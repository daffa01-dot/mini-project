import transporter from "../configs/nodemailer.config";
import prisma from "../configs/prisma-client.config"; // ⚠️ Pastikan path ke file prisma client Anda sudah benar

type SendMail = {
  to: string;
  subject: string;
  html: string;
};

interface SendEmailWithLogProps {
  userId?: string | null;
  emailTo: string;
  subject: string;
  body: string; 
  referenceId?: string | null;
  type: "donasi_berhasil" | "donasi_gagal";
}

export class MailerUtil {
  // 1. Method bawaan Anda (Tetap Dipertahankan agar tidak break fitur lain)
  static async sendMail({ to, subject, html }: SendMail) {
    return await transporter.sendMail({
      to,
      subject,
      html,
    });
  }

  // 2. 🟢 METHOD BARU: Kirim Email + Simpan Log ke Database secara Async
  static async sendWithLog({
    userId,
    emailTo,
    subject,
    body,
    referenceId,
    type,
  }: SendEmailWithLogProps) {
    let logRecord: any = null;

    try {
      // Catat status 'pending' sebelum memanggil SMTP Gmail
      logRecord = await (prisma as any).mailerLog.create({
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
    } catch (dbError) {
      console.error("[Mailer Log Error]: Gagal membuat baris log awal di database", dbError);
    }

    // Jalankan pengiriman email via SMTP di background (Non-blocking)
    transporter.sendMail({
      from: process.env.NODEMAILER_GOOGLE_APP_USER_EMAIL || '"Teman Asuh" <no-reply@temanasuh.org>',
      to: emailTo,
      subject: subject,
      html: body,
    })
    .then(async () => {
      // Jika email sukses terkirim ke internet, ubah status jadi success
      if (logRecord) {
        await (prisma as any).mailerLog.update({
          where: { id: logRecord.id },
          data: {
            status: "success",
            sentAt: new Date(),
          },
        });
      }
      console.log(`[Mailer Success]: Email notifikasi berhasil dikirim ke ${emailTo}`);
    })
    .catch(async (smtpError: any) => {
      // Jika Gmail menolak/gagal, ubah status jadi failed dan catat erornya
      if (logRecord) {
        await (prisma as any).mailerLog.update({
          where: { id: logRecord.id },
          data: {
            status: "failed",
            errorMessage: smtpError.message || "SMTP Server Error",
          },
        });
      }
      console.error(`[Mailer Failed]: Gagal mengirim email ke ${emailTo}. Alasan:`, smtpError.message);
    });

    return logRecord;
  }
}

// Ekspor sebagai default agar fleksibel saat di-import
export default MailerUtil;