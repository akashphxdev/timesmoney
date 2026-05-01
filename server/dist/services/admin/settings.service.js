"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = exports.getSettings = void 0;
const db_1 = require("../../config/db");
const getSettings = async () => {
    return await db_1.prisma.cmsSettings.upsert({
        where: { key: 'global' },
        update: {},
        create: { key: 'global' },
    });
};
exports.getSettings = getSettings;
const updateSettings = async (body) => {
    return await db_1.prisma.cmsSettings.upsert({
        where: { key: 'global' },
        update: {
            whatsappNo: body.whatsappNo,
            callingNo: body.callingNo,
            supportEmail: body.supportEmail,
            instagramUrl: body.instagramUrl,
            linkedinUrl: body.linkedinUrl,
            autoMailEnabled: body.autoMailEnabled,
            autoWhatsappEnabled: body.autoWhatsappEnabled,
            maintenanceMode: body.maintenanceMode,
        },
        create: { key: 'global' },
    });
};
exports.updateSettings = updateSettings;
