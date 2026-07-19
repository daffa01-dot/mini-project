/*
  Warnings:

  - You are about to drop the `Bookmark` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_satwaId_fkey";

-- DropForeignKey
ALTER TABLE "Bookmark" DROP CONSTRAINT "Bookmark_userId_fkey";

-- DropTable
DROP TABLE "Bookmark";

-- CreateTable
CREATE TABLE "satwa_Bookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "satwaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "satwa_Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "satwa_Bookmark_userId_satwaId_key" ON "satwa_Bookmark"("userId", "satwaId");

-- AddForeignKey
ALTER TABLE "satwa_Bookmark" ADD CONSTRAINT "satwa_Bookmark_satwaId_fkey" FOREIGN KEY ("satwaId") REFERENCES "Satwa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "satwa_Bookmark" ADD CONSTRAINT "satwa_Bookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
