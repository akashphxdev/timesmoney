-- CreateEnum
CREATE TYPE "LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'QUALIFIED', 'CONVERTED', 'REJECTED');

-- CreateTable
CREATE TABLE "cms_products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT,
    "description" TEXT,
    "image" TEXT,
    "provider" TEXT,
    "providerLogo" TEXT,
    "interestRate" TEXT,
    "processingFee" TEXT,
    "minAmount" TEXT,
    "maxAmount" TEXT,
    "tenure" TEXT,
    "features" JSONB,
    "benefits" JSONB,
    "eligibility" JSONB,
    "formFields" JSONB,
    "applyUrl" TEXT,
    "status" "CmsStatus" NOT NULL DEFAULT 'DRAFT',
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "isBestSeller" BOOLEAN NOT NULL DEFAULT false,
    "badge" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT,
    "subCategoryId" TEXT,

    CONSTRAINT "cms_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cms_leads" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "message" TEXT,
    "customData" JSONB,
    "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "assignedTo" TEXT,
    "source" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productId" TEXT,
    "categoryId" TEXT,

    CONSTRAINT "cms_leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cms_products_slug_key" ON "cms_products"("slug");

-- CreateIndex
CREATE INDEX "cms_products_status_idx" ON "cms_products"("status");

-- CreateIndex
CREATE INDEX "cms_products_featured_idx" ON "cms_products"("featured");

-- CreateIndex
CREATE INDEX "cms_products_categoryId_idx" ON "cms_products"("categoryId");

-- CreateIndex
CREATE INDEX "cms_leads_productId_idx" ON "cms_leads"("productId");

-- CreateIndex
CREATE INDEX "cms_leads_status_idx" ON "cms_leads"("status");

-- CreateIndex
CREATE INDEX "cms_leads_categoryId_idx" ON "cms_leads"("categoryId");

-- AddForeignKey
ALTER TABLE "cms_products" ADD CONSTRAINT "cms_products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "cms_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cms_products" ADD CONSTRAINT "cms_products_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "cms_sub_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cms_leads" ADD CONSTRAINT "cms_leads_productId_fkey" FOREIGN KEY ("productId") REFERENCES "cms_products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cms_leads" ADD CONSTRAINT "cms_leads_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "cms_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
