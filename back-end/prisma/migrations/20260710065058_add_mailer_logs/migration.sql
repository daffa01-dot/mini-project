-- CreateEnum
CREATE TYPE "MailerLogType" AS ENUM ('donasi_berhasil', 'donasi_gagal');

-- CreateEnum
CREATE TYPE "MailerReferenceType" AS ENUM ('donasi');

-- CreateEnum
CREATE TYPE "MailerStatus" AS ENUM ('pending', 'success', 'failed');

-- CreateTable
CREATE TABLE "mailer_logs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT,
    "email_to" VARCHAR(150) NOT NULL,
    "subject" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "reference_id" TEXT,
    "sent_at" TIMESTAMP(3),
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "type" "MailerLogType" NOT NULL,
    "reference_type" "MailerReferenceType",
    "status" "MailerStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "mailer_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mailer_logs" ADD CONSTRAINT "mailer_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
