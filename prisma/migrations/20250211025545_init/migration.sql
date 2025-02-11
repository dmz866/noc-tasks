/*
  Warnings:

  - Changed the type of `level` on the `LogModel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "LogModel" DROP COLUMN "level",
ADD COLUMN     "level" TEXT NOT NULL;

-- DropEnum
DROP TYPE "SeverityLevel";
