-- DropForeignKey
ALTER TABLE "Laporan" DROP CONSTRAINT "Laporan_satwaId_fkey";

-- AlterTable
ALTER TABLE "Donasi" ADD COLUMN     "alasanDitolak" TEXT,
ADD COLUMN     "diverifikasiAt" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
