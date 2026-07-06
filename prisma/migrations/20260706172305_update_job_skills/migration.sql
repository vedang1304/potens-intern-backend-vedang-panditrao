/*
  Warnings:

  - You are about to drop the column `requiredSkill` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "requiredSkill",
ADD COLUMN     "skills" TEXT[];
