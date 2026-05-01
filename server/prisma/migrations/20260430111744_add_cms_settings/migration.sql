-- CreateTable
CREATE TABLE "cms_settings" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL DEFAULT 'global',
    "whatsappNo" TEXT,
    "callingNo" TEXT,
    "supportEmail" TEXT,
    "instagramUrl" TEXT,
    "linkedinUrl" TEXT,
    "autoMailEnabled" BOOLEAN NOT NULL DEFAULT false,
    "autoWhatsappEnabled" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cms_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cms_settings_key_key" ON "cms_settings"("key");
