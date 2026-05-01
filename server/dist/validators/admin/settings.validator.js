"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettingsSchema = void 0;
const zod_1 = require("zod");
exports.updateSettingsSchema = zod_1.z.object({
    whatsappNo: zod_1.z.string().optional(),
    callingNo: zod_1.z.string().optional(),
    supportEmail: zod_1.z.string().email().optional(),
    instagramUrl: zod_1.z.string().url().optional(),
    linkedinUrl: zod_1.z.string().url().optional(),
    autoMailEnabled: zod_1.z.boolean().optional(),
    autoWhatsappEnabled: zod_1.z.boolean().optional(),
    maintenanceMode: zod_1.z.boolean().optional(),
});
