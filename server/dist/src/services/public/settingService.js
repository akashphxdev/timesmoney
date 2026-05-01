"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicSettings = void 0;
const db_1 = require("../../config/db");
const getPublicSettings = async () => {
    const settings = await db_1.prisma.cmsSettings.findFirst({
        select: {
            whatsappNo: true,
            callingNo: true,
            supportEmail: true,
            instagramUrl: true,
            linkedinUrl: true,
            autoMailEnabled: true,
            autoWhatsappEnabled: true,
        },
    });
    return settings;
};
exports.getPublicSettings = getPublicSettings;
