/*
  Warnings:

  - You are about to drop the column `Jenis` on the `Satwa` table. All the data in the column will be lost.
  - Added the required column `jenis` to the `Satwa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Satwa" DROP COLUMN "Jenis",
ADD COLUMN     "jenis" "JenisSatwa" NOT NULL;
