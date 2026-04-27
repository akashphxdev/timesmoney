/*
  Warnings:

  - You are about to drop the `cms_ads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cms_ads" DROP CONSTRAINT "cms_ads_categoryId_fkey";

-- DropTable
DROP TABLE "cms_ads";

-- DropEnum
DROP TYPE "AdPlacement";
