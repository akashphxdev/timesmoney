"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const dashboard_service_1 = require("../../services/admin/dashboard.service");
const getStats = async (_req, res) => {
    try {
        const stats = await (0, dashboard_service_1.getDashboardStats)();
        res.json({ success: true, data: stats });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getStats = getStats;
