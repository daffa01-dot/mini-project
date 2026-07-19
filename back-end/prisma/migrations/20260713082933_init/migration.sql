-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'SHELTER', 'DONATUR');

-- CreateEnum
CREATE TYPE "JenisSatwa" AS ENUM ('ANJING', 'KUCING', 'LAINNYA');

-- CreateEnum
CREATE TYPE "KelaminSatwa" AS ENUM ('JANTAN', 'BETINA');

-- CreateEnum
CREATE TYPE "StatusSatwa" AS ENUM ('TERSEDIA', 'DIADOPSI', 'TIDAK_AKTIF');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('MENUNGGU', 'DIVERIFIKASI', 'DITOLAK');

-- CreateEnum
CREATE TYPE "MailerLogType" AS ENUM ('donasi_berhasil', 'donasi_gagal');

-- CreateEnum
CREATE TYPE "MailerReferenceType" AS ENUM ('donasi');

-- CreateEnum
CREATE TYPE "MailerStatus" AS ENUM ('pending', 'success', 'failed');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'DONATUR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "namaLengkap" TEXT NOT NULL,
    "noWhatsapp" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shelter" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "alamatLengkap" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'MENUNGGU',
    "deskripsi" TEXT NOT NULL,
    "fotoBanner" TEXT,
    "isAktif" BOOLEAN NOT NULL DEFAULT true,
    "kota" TEXT NOT NULL,
    "namaShelter" TEXT NOT NULL,
    "noWhatsapp" TEXT NOT NULL,

    CONSTRAINT "Shelter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShelterBank" (
    "id" TEXT NOT NULL,
    "shelterId" TEXT NOT NULL,
    "namaBank" TEXT NOT NULL,
    "nomorRekening" TEXT NOT NULL,
    "atasNamaRekening" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShelterBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Satwa" (
    "id" TEXT NOT NULL,
    "shelterId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis" "JenisSatwa" NOT NULL,
    "ras" TEXT,
    "umur" INTEGER NOT NULL,
    "kelamin" "KelaminSatwa" NOT NULL,
    "foto" TEXT,
    "deskripsi" TEXT,
    "danaTerkumpul" INTEGER NOT NULL DEFAULT 0,
    "status" "StatusSatwa" NOT NULL DEFAULT 'TERSEDIA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Satwa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donasi" (
    "id" TEXT NOT NULL,
    "donaturId" TEXT NOT NULL,
    "satwaId" TEXT,
    "shelterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "buktiResi" TEXT NOT NULL,
    "catatan" TEXT,
    "nominal" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'MENUNGGU',
    "alasanDitolak" TEXT,
    "diverifikasiAt" TIMESTAMP(3),

    CONSTRAINT "Donasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laporan" (
    "id" TEXT NOT NULL,
    "satwaId" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "foto" TEXT,
    "fotoPublicId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "satwaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShelterBookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "shelterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShelterBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Shelter_userId_key" ON "Shelter"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ShelterBank_shelterId_key" ON "ShelterBank"("shelterId");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_userId_satwaId_key" ON "Bookmark"("userId", "satwaId");

-- CreateIndex
CREATE UNIQUE INDEX "ShelterBookmark_userId_shelterId_key" ON "ShelterBookmark"("userId", "shelterId");

-- AddForeignKey
ALTER TABLE "Shelter" ADD CONSTRAINT "Shelter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShelterBank" ADD CONSTRAINT "ShelterBank_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Satwa" ADD CONSTRAINT "Satwa_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donasi" ADD CONSTRAINT "Donasi_donaturId_fkey" FOREIGN KEY ("donaturId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donasi" ADD CONSTRAINT "Donasi_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donasi" ADD CONSTRAINT "Donasi_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mailer_logs" ADD CONSTRAINT "mailer_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShelterBookmark" ADD CONSTRAINT "ShelterBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShelterBookmark" ADD CONSTRAINT "ShelterBookmark_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
