-- CreateTable
CREATE TABLE "cms_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cms_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cms_sub_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "imageUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "cms_sub_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cms_categories_slug_key" ON "cms_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "cms_sub_categories_slug_key" ON "cms_sub_categories"("slug");

-- CreateIndex
CREATE INDEX "cms_sub_categories_categoryId_idx" ON "cms_sub_categories"("categoryId");

-- AddForeignKey
ALTER TABLE "cms_sub_categories" ADD CONSTRAINT "cms_sub_categories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "cms_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
