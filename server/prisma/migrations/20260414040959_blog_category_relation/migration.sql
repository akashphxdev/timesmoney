/*
  Warnings:

  - You are about to drop the column `category` on the `cms_blogs` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "cms_blogs_category_idx";

-- AlterTable
ALTER TABLE "cms_blogs" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT,
ADD COLUMN     "subCategoryId" TEXT;

-- CreateIndex
CREATE INDEX "cms_blogs_categoryId_idx" ON "cms_blogs"("categoryId");

-- AddForeignKey
ALTER TABLE "cms_blogs" ADD CONSTRAINT "cms_blogs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "cms_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cms_blogs" ADD CONSTRAINT "cms_blogs_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "cms_sub_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
