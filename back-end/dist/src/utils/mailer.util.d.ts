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
export declare class MailerUtil {
    static sendMail({ to, subject, html }: SendMail): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    static sendWithLog({ userId, emailTo, subject, body, referenceId, type, }: SendEmailWithLogProps): Promise<any>;
}
export default MailerUtil;
//# sourceMappingURL=mailer.util.d.ts.map