"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSettingsHandler = void 0;
const settingService_1 = require("../../services/public/settingService");
const getSettingsHandler = async (req, res) => {
    try {
        const settings = await (0, settingService_1.getPublicSettings)();
        return res.status(200).json({
            success: true,
            data: settings,
        });
    }
    catch (error) {
        console.error('getSettingsHandler error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};
exports.getSettingsHandler = getSettingsHandler;
