"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackAdEvent = exports.getActiveAds = void 0;
const db_1 = require("../../config/db");
const getActiveAds = async (page, position) => {
    const now = new Date();
    return await db_1.prisma.cmsAd.findMany({
        where: {
            active: true,
            pages: { has: page },
            ...(position ? { positions: { has: position } } : {}),
            OR: [
                { startDateTime: null, endDateTime: null },
                { startDateTime: { lte: now }, endDateTime: null },
                { startDateTime: null, endDateTime: { gte: now } },
                { startDateTime: { lte: now }, endDateTime: { gte: now } },
            ],
        },
        select: {
            id: true,
            title: true,
            image: true,
            link: true,
            size: true,
            customWidth: true,
            customHeight: true,
            positions: true,
            pages: true,
            sortOrder: true,
        },
        orderBy: { sortOrder: 'asc' },
    });
};
exports.getActiveAds = getActiveAds;
const trackAdEvent = async (body) => {
    const { adId, type, ip, sessionId, userAgent, deviceType, page, referrer, country } = body;
    let isUnique = true;
    if (ip) {
        const existing = await db_1.prisma.cmsAdEvent.findFirst({
            where: { adId, type, ip },
        });
        if (existing)
            isUnique = false;
    }
    return await db_1.prisma.cmsAdEvent.create({
        data: {
            adId,
            type,
            isUnique,
            ip: ip || null,
            sessionId: sessionId || null,
            userAgent: userAgent || null,
            deviceType: deviceType || null,
            page: page || null,
            referrer: referrer || null,
            country: country || null,
        },
    });
};
exports.trackAdEvent = trackAdEvent;
