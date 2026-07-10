/*
  Warnings:

  - You are about to drop the column `atasNamaRekening` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `namaBank` on the `Shelter` table. All the data in the column will be lost.
  - You are about to drop the column `nomorRekening` on the `Shelter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Laporan" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Satwa" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Shelter" DROP COLUMN "atasNamaRekening",
DROP COLUMN "namaBank",
DROP COLUMN "nomorRekening",
ADD COLUMN     "deletedAt" TIMESTAMP(3);

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
CREATE TABLE "Bookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "satwaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShelterBank_shelterId_key" ON "ShelterBank"("shelterId");

-- CreateIndex
CREATE UNIQUE INDEX "Bookmark_userId_satwaId_key" ON "Bookmark"("userId", "satwaId");

-- AddForeignKey
ALTER TABLE "ShelterBank" ADD CONSTRAINT "ShelterBank_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
