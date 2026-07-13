/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Donasi` table. All the data in the column will be lost.
  - The `status` column on the `Donasi` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('MENUNGGU', 'DIVERIFIKASI', 'DITOLAK');

-- AlterTable
ALTER TABLE "Donasi" DROP COLUMN "deletedAt",
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'MENUNGGU';

-- AlterTable
ALTER TABLE "Laporan" ADD COLUMN     "fotoPublicId" TEXT;

-- AlterTable
ALTER TABLE "Shelter" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'MENUNGGU';

-- DropEnum
DROP TYPE "StatusDonasi";

-- CreateTable
CREATE TABLE "ShelterBookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "shelterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShelterBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShelterBookmark_userId_shelterId_key" ON "ShelterBookmark"("userId", "shelterId");

-- AddForeignKey
ALTER TABLE "ShelterBookmark" ADD CONSTRAINT "ShelterBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShelterBookmark" ADD CONSTRAINT "ShelterBookmark_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
