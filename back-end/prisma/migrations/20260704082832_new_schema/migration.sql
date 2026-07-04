/*
  Warnings:

  - The values [ADMIN] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `jenis` on the `Satwa` table. All the data in the column will be lost.
  - Added the required column `Jenis` to the `Satwa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "JenisSatwa" ADD VALUE 'LAINNYA';

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
ALTER TABLE "Satwa" DROP COLUMN "jenis",
ADD COLUMN     "Jenis" "JenisSatwa" NOT NULL;
