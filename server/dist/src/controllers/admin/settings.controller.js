"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsController = void 0;
const settings_service_1 = require("../../services/admin/settings.service");
const settings_validator_1 = require("../../validators/admin/settings.validator");
exports.settingsController = {
    async getSettings(req, res) {
        try {
            const settings = await (0, settings_service_1.getSettings)();
            res.json({ success: true, data: settings });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Failed to fetch settings' });
        }
    },
    async updateSettings(req, res) {
        try {
            const parsed = settings_validator_1.updateSettingsSchema.safeParse(req.body);
            if (!parsed.success) {
                return res.status(400).json({ success: false, errors: parsed.error.flatten() });
            }
            const settings = await (0, settings_service_1.updateSettings)(parsed.data);
            res.json({ success: true, data: settings });
        }
        catch (error) {
            res.status(500).json({ success: false, message: 'Failed to update settings' });
        }
    },
};
