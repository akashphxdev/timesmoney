-- CreateEnum
CREATE TYPE "AdPlacement" AS ENUM ('HOMEPAGE_TOP', 'HOMEPAGE_BOTTOM', 'BLOG_TOP', 'BLOG_BOTTOM', 'PRODUCT_PAGE', 'BETWEEN_CONTENT', 'CALCULATOR_TOP', 'CALCULATOR_BOTTOM', 'CATEGORY_TOP', 'CATEGORY_BOTTOM');

-- CreateTable
CREATE TABLE "cms_ads" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "link" TEXT,
    "placement" "AdPlacement" NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "impressions" INTEGER NOT NULL DEFAULT 0,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT,

    CONSTRAINT "cms_ads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cms_ads_active_placement_idx" ON "cms_ads"("active", "placement");

-- CreateIndex
CREATE INDEX "cms_ads_placement_categoryId_idx" ON "cms_ads"("placement", "categoryId");

-- CreateIndex
CREATE INDEX "cms_ads_startDate_endDate_idx" ON "cms_ads"("startDate", "endDate");

-- AddForeignKey
ALTER TABLE "cms_ads" ADD CONSTRAINT "cms_ads_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "cms_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
