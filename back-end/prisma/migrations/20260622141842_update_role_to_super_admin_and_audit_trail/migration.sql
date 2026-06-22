/*
  Warnings:

  - The values [ADMIN] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Shelter` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `netAmount` to the `Donasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platformFee` to the `Donasi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Shelter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Shelter` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ShelterVerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('SUPER_ADMIN', 'SHELTER', 'DONATUR');
ALTER TABLE "public"."User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'DONATUR';
COMMIT;

-- AlterTable
ALTER TABLE "Donasi" ADD COLUMN     "netAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "platformFee" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "verifiedById" TEXT;

-- AlterTable
ALTER TABLE "Shelter" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD COLUMN     "verificationStatus" "ShelterVerificationStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE UNIQUE INDEX "Shelter_userId_key" ON "Shelter"("userId");

-- AddForeignKey
ALTER TABLE "Shelter" ADD CONSTRAINT "Shelter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donasi" ADD CONSTRAINT "Donasi_verifiedById_fkey" FOREIGN KEY ("verifiedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
