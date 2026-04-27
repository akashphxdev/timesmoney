-- CreateEnum
CREATE TYPE "AdPage" AS ENUM ('HOME', 'BLOG', 'PRODUCT', 'CATEGORY', 'CALCULATOR');

-- CreateEnum
CREATE TYPE "AdPosition" AS ENUM ('TOP', 'BOTTOM', 'BETWEEN_CONTENT', 'SIDEBAR');

-- CreateEnum
CREATE TYPE "AdSize" AS ENUM ('BANNER_728x90', 'BANNER_300x250', 'BANNER_300x600', 'BANNER_320x50', 'BANNER_160x600', 'BANNER_970x90', 'CUSTOM');

-- CreateEnum
CREATE TYPE "AdEventType" AS ENUM ('CLICK', 'IMPRESSION');

-- CreateTable
CREATE TABLE "cms_ads" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "page" "AdPage" NOT NULL,
    "position" "AdPosition" NOT NULL,
    "size" "AdSize" NOT NULL DEFAULT 'BANNER_300x250',
    "startDateTime" TIMESTAMP(3),
    "endDateTime" TIMESTAMP(3),
    "link" TEXT,
    "image" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cms_ads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cms_ad_events" (
    "id" TEXT NOT NULL,
    "adId" TEXT NOT NULL,
    "type" "AdEventType" NOT NULL,
    "isUnique" BOOLEAN NOT NULL DEFAULT false,
    "ip" TEXT,
    "sessionId" TEXT,
    "userAgent" TEXT,
    "deviceType" TEXT,
    "page" TEXT,
    "referrer" TEXT,
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cms_ad_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cms_ads_active_idx" ON "cms_ads"("active");

-- CreateIndex
CREATE INDEX "cms_ads_page_idx" ON "cms_ads"("page");

-- CreateIndex
CREATE INDEX "cms_ad_events_adId_idx" ON "cms_ad_events"("adId");

-- CreateIndex
CREATE INDEX "cms_ad_events_type_idx" ON "cms_ad_events"("type");

-- CreateIndex
CREATE INDEX "cms_ad_events_isUnique_idx" ON "cms_ad_events"("isUnique");

-- CreateIndex
CREATE INDEX "cms_ad_events_sessionId_idx" ON "cms_ad_events"("sessionId");

-- CreateIndex
CREATE INDEX "cms_ad_events_createdAt_idx" ON "cms_ad_events"("createdAt");

-- CreateIndex
CREATE INDEX "cms_ad_events_deviceType_idx" ON "cms_ad_events"("deviceType");

-- AddForeignKey
ALTER TABLE "cms_ad_events" ADD CONSTRAINT "cms_ad_events_adId_fkey" FOREIGN KEY ("adId") REFERENCES "cms_ads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
