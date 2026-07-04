/*
  Warnings:

  - The values [SUPER_ADMIN] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `amount` on the `Donasi` table. All the data in the column will be lost.
  - You are about to drop the column `hewanId` on the `Donasi` table. All the data in the column will be lost.
  - You are about to drop the column `netAmount` on the `Donasi` table. All the data in the column will be lost.
  - You are about to drop the column `platformFee` on the `Donasi` table. All the data in the column will be lost.
  - You are about to drop the column `proofUrl` on the `Donasi` table. All the data in the column will be lost.
  - You are about to drop the column `verifiedById` on the `Donasi` table. All the data in the column will be lost.
  - The `status` column on the `Donasi` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `address` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `bankAccount` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `contactNo` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `verificationStatus` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AdoptionPeriod` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Donatur` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hewan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Wishlist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `buktiResi` to the `Donasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nominal` to the `Donasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shelterId` to the `Donasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alamatLengkap` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atasNamaRekening` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deskripsi` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kota` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaBank` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaShelter` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noWhatsapp` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomorRekening` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaLengkap` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JenisSatwa" AS ENUM ('ANJING', 'KUCING');

-- CreateEnum
CREATE TYPE "KelaminSatwa" AS ENUM ('JANTAN', 'BETINA');

-- CreateEnum
CREATE TYPE "StatusSatwa" AS ENUM ('TERSEDIA', 'DIADOPSI', 'TIDAK_AKTIF');

-- CreateEnum
CREATE TYPE "StatusDonasi" AS ENUM ('MENUNGGU', 'DIVERIFIKASI', 'DITOLAK');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'SHELTER', 'DONATUR');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'DONATUR';
COMMIT;

-- DropForeignKey
ALTER TABLE "AdoptionPeriod" DROP CONSTRAINT "AdoptionPeriod_donaturId_fkey";

-- DropForeignKey
ALTER TABLE "AdoptionPeriod" DROP CONSTRAINT "AdoptionPeriod_hewanId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_donaturId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_reportId_fkey";

-- DropForeignKey
ALTER TABLE "Donasi" DROP CONSTRAINT "Donasi_donaturId_fkey";

-- DropForeignKey
ALTER TABLE "Donasi" DROP CONSTRAINT "Donasi_hewanId_fkey";

-- DropForeignKey
ALTER TABLE "Donasi" DROP CONSTRAINT "Donasi_verifiedById_fkey";

-- DropForeignKey
ALTER TABLE "Donatur" DROP CONSTRAINT "Donatur_userId_fkey";

-- DropForeignKey
ALTER TABLE "Hewan" DROP CONSTRAINT "Hewan_shelterId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_hewanId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_donaturId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_hewanId_fkey";

-- AlterTable
ALTER TABLE "Donasi" DROP COLUMN "amount",
DROP COLUMN "hewanId",
DROP COLUMN "netAmount",
DROP COLUMN "platformFee",
DROP COLUMN "proofUrl",
DROP COLUMN "verifiedById",
ADD COLUMN     "buktiResi" TEXT NOT NULL,
ADD COLUMN     "catatan" TEXT,
ADD COLUMN     "nominal" INTEGER NOT NULL,
ADD COLUMN     "satwaId" TEXT,
ADD COLUMN     "shelterId" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "StatusDonasi" NOT NULL DEFAULT 'MENUNGGU';

-- AlterTable
ALTER TABLE "Shelter" DROP COLUMN "address",
DROP COLUMN "bankAccount",
DROP COLUMN "city",
DROP COLUMN "contactNo",
DROP COLUMN "deletedAt",
DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "verificationStatus",
ADD COLUMN     "alamatLengkap" TEXT NOT NULL,
ADD COLUMN     "atasNamaRekening" TEXT NOT NULL,
ADD COLUMN     "deskripsi" TEXT NOT NULL,
ADD COLUMN     "fotoBanner" TEXT,
ADD COLUMN     "isAktif" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "kota" TEXT NOT NULL,
ADD COLUMN     "namaBank" TEXT NOT NULL,
ADD COLUMN     "namaShelter" TEXT NOT NULL,
ADD COLUMN     "noWhatsapp" TEXT NOT NULL,
ADD COLUMN     "nomorRekening" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "deletedAt",
ADD COLUMN     "namaLengkap" TEXT NOT NULL,
ADD COLUMN     "noWhatsapp" TEXT;

-- DropTable
DROP TABLE "AdoptionPeriod";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Donatur";

-- DropTable
DROP TABLE "Hewan";

-- DropTable
DROP TABLE "Report";

-- DropTable
DROP TABLE "Wishlist";

-- DropEnum
DROP TYPE "DonationStatus";

-- DropEnum
DROP TYPE "ShelterVerificationStatus";

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
    "riwayatMedis" TEXT,
    "status" "StatusSatwa" NOT NULL DEFAULT 'TERSEDIA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Satwa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laporan" (
    "id" TEXT NOT NULL,
    "satwaId" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Satwa" ADD CONSTRAINT "Satwa_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donasi" ADD CONSTRAINT "Donasi_donaturId_fkey" FOREIGN KEY ("donaturId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donasi" ADD CONSTRAINT "Donasi_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donasi" ADD CONSTRAINT "Donasi_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
