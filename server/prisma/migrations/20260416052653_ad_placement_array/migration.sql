/*
  Warnings:

  - Changed the column `placement` on the `cms_ads` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- DropIndex
DROP INDEX "cms_ads_active_placement_idx";

-- DropIndex
DROP INDEX "cms_ads_placement_categoryId_idx";

-- AlterTable
ALTER TABLE "cms_ads" 
ALTER COLUMN "placement" TYPE "AdPlacement"[] 
USING ARRAY["placement"::"AdPlacement"];

-- CreateIndex
CREATE INDEX "cms_ads_active_idx" ON "cms_ads"("active");

-- CreateIndex
CREATE INDEX "cms_ads_categoryId_idx" ON "cms_ads"("categoryId");
