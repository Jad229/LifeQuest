/*
  Warnings:

  - Made the column `userId` on table `Quest` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Quest" DROP CONSTRAINT "Quest_userId_fkey";

-- AlterTable
ALTER TABLE "Quest" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Quest" ADD CONSTRAINT "Quest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
