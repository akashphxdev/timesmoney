"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdsForFilter = exports.getByAdId = exports.getAll = exports.getStats = void 0;
const ad_event_service_1 = require("../../services/admin/ad-event.service");
const getStats = async (_req, res) => {
    try {
        const stats = await (0, ad_event_service_1.getAdEventStats)();
        res.json({ success: true, data: stats });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getStats = getStats;
const getAll = async (req, res) => {
    try {
        const { adId, type, deviceType, startDate, endDate, page, limit } = req.query;
        const result = await (0, ad_event_service_1.getAllAdEvents)({
            adId: adId,
            type: type,
            deviceType: deviceType,
            startDate: startDate,
            endDate: endDate,
            page: page ? Number(page) : 1,
            limit: limit ? Number(limit) : 20,
        });
        res.json({ success: true, ...result });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAll = getAll;
const getByAdId = async (req, res) => {
    try {
        // ✅ Fix: string | string[] → string
        const adId = req.params.adId;
        const result = await (0, ad_event_service_1.getAdEventsByAdId)(adId);
        res.json({ success: true, data: result });
    }
    catch (error) {
        const err = error;
        res.status(404).json({ success: false, message: err.message });
    }
};
exports.getByAdId = getByAdId;
const getAdsForFilter = async (_req, res) => {
    try {
        const ads = await (0, ad_event_service_1.getAllAdsForFilter)();
        res.json({ success: true, data: ads });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAdsForFilter = getAdsForFilter;
