"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackEvent = exports.getAds = void 0;
const ad_service_1 = require("../../services/public/ad.service");
const getAds = async (req, res) => {
    try {
        const { page, position } = req.query;
        if (!page) {
            return res.status(400).json({ success: false, message: 'page query param is required' });
        }
        const validPages = ['HOME', 'BLOG', 'BLOG_DETAIL', 'PRODUCT', 'PRODUCT_DETAIL', 'CATEGORY', 'SUB_CATEGORY', 'TOOLS', 'CALCULATOR'];
        if (!validPages.includes(page)) {
            return res.status(400).json({ success: false, message: 'Invalid page value' });
        }
        const validPositions = ['TOP', 'BOTTOM', 'BETWEEN_CONTENT', 'SIDEBAR'];
        if (position && !validPositions.includes(position)) {
            return res.status(400).json({ success: false, message: 'Invalid position value' });
        }
        const ads = await (0, ad_service_1.getActiveAds)(page, position);
        res.json({ success: true, data: ads });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getAds = getAds;
const trackEvent = async (req, res) => {
    try {
        const { adId, type, sessionId, page, referrer, clientIp } = req.body;
        if (!adId || !type) {
            return res.status(400).json({ success: false, message: 'adId and type are required' });
        }
        if (!['CLICK', 'IMPRESSION'].includes(type)) {
            return res.status(400).json({ success: false, message: 'Invalid event type' });
        }
        // Extract real IP from headers
        let ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
            req.socket.remoteAddress ||
            null;
        // ::ffff:49.43.178.124 → 49.43.178.124
        if (ip && ip.startsWith('::ffff:')) {
            ip = ip.replace('::ffff:', '');
        }
        // Localhost pe frontend se aayi real IP use karo
        if ((ip === '::1' || ip === '127.0.0.1') && clientIp) {
            ip = clientIp;
        }
        const userAgent = req.headers['user-agent'] || null;
        const deviceType = detectDevice(userAgent);
        // Geo lookup
        let country = null;
        if (ip) {
            try {
                const geo = await fetch(`${process.env.GEO_API_URL}/${ip}?fields=status,country,regionName,city`);
                const geoData = await geo.json();
                if (geoData.status === 'success' && geoData.country) {
                    country = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
                }
            }
            catch { }
        }
        await (0, ad_service_1.trackAdEvent)({
            adId,
            type,
            ip: ip || undefined,
            sessionId: sessionId || undefined,
            userAgent: userAgent || undefined,
            deviceType,
            page: page || undefined,
            referrer: referrer || undefined,
            country: country || undefined,
        });
        res.json({ success: true });
    }
    catch (error) {
        const err = error;
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.trackEvent = trackEvent;
function detectDevice(userAgent) {
    if (!userAgent)
        return 'unknown';
    const ua = userAgent.toLowerCase();
    if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/.test(ua))
        return 'mobile';
    if (/tablet|ipad/.test(ua))
        return 'tablet';
    return 'desktop';
}
