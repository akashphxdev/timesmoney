/*
  Warnings:

  - You are about to drop the column `page` on the `cms_ads` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `cms_ads` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AdPage" ADD VALUE 'BLOG_DETAIL';
ALTER TYPE "AdPage" ADD VALUE 'PRODUCT_DETAIL';
ALTER TYPE "AdPage" ADD VALUE 'SUB_CATEGORY';
ALTER TYPE "AdPage" ADD VALUE 'TOOLS';

-- DropIndex
DROP INDEX "cms_ads_page_idx";

-- AlterTable
ALTER TABLE "cms_ads" DROP COLUMN "page",
DROP COLUMN "position",
ADD COLUMN     "pages" "AdPage"[],
ADD COLUMN     "positions" "AdPosition"[];
