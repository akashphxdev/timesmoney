-- CreateTable
CREATE TABLE "cms_calculators" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT,
    "shortDescription" TEXT,
    "description" TEXT,
    "sliders" JSONB NOT NULL,
    "outputFields" JSONB NOT NULL,
    "total" JSONB NOT NULL,
    "status" "CmsStatus" NOT NULL DEFAULT 'DRAFT',
    "viewCount" INTEGER NOT NULL DEFAULT 0,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cms_calculators_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cms_calculators_slug_key" ON "cms_calculators"("slug");

-- CreateIndex
CREATE INDEX "cms_calculators_status_idx" ON "cms_calculators"("status");
