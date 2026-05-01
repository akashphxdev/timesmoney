"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAdsForFilter = exports.getAdEventsByAdId = exports.getAllAdEvents = exports.getAdEventStats = void 0;
// src/services/admin/ad-event.service.ts
const db_1 = require("../../config/db");
const getAdEventStats = async () => {
    const [totalClicks, totalImpressions, uniqueClicks, uniqueImpressions] = await Promise.all([
        db_1.prisma.cmsAdEvent.count({ where: { type: 'CLICK' } }),
        db_1.prisma.cmsAdEvent.count({ where: { type: 'IMPRESSION' } }),
        db_1.prisma.cmsAdEvent.count({ where: { type: 'CLICK', isUnique: true } }),
        db_1.prisma.cmsAdEvent.count({ where: { type: 'IMPRESSION', isUnique: true } }),
    ]);
    return { totalClicks, totalImpressions, uniqueClicks, uniqueImpressions };
};
exports.getAdEventStats = getAdEventStats;
const getAllAdEvents = async (filters) => {
    const { adId, type, deviceType, startDate, endDate, page = 1, limit = 20 } = filters;
    const where = {};
    if (adId)
        where.adId = adId;
    if (type)
        where.type = type;
    if (deviceType)
        where.deviceType = deviceType;
    if (startDate || endDate) {
        where.createdAt = {};
        if (startDate)
            where.createdAt.gte = new Date(startDate);
        if (endDate)
            where.createdAt.lte = new Date(endDate);
    }
    const skip = (page - 1) * limit;
    const [events, total] = await Promise.all([
        db_1.prisma.cmsAdEvent.findMany({
            where,
            include: {
                ad: { select: { id: true, title: true, pages: true, positions: true } },
            },
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
        }),
        db_1.prisma.cmsAdEvent.count({ where }),
    ]);
    return {
        events,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
};
exports.getAllAdEvents = getAllAdEvents;
const getAdEventsByAdId = async (adId) => {
    const ad = await db_1.prisma.cmsAd.findUnique({ where: { id: adId } });
    if (!ad)
        throw new Error('Ad not found');
    const [clicks, impressions, uniqueClicks, uniqueImpressions, deviceBreakdown, recentEvents] = await Promise.all([
        db_1.prisma.cmsAdEvent.count({ where: { adId, type: 'CLICK' } }),
        db_1.prisma.cmsAdEvent.count({ where: { adId, type: 'IMPRESSION' } }),
        db_1.prisma.cmsAdEvent.count({ where: { adId, type: 'CLICK', isUnique: true } }),
        db_1.prisma.cmsAdEvent.count({ where: { adId, type: 'IMPRESSION', isUnique: true } }),
        db_1.prisma.cmsAdEvent.groupBy({
            by: ['deviceType'],
            where: { adId },
            _count: { _all: true },
        }),
        db_1.prisma.cmsAdEvent.findMany({
            where: { adId },
            orderBy: { createdAt: 'desc' },
            take: 50,
        }),
    ]);
    return {
        ad,
        stats: { clicks, impressions, uniqueClicks, uniqueImpressions },
        deviceBreakdown,
        recentEvents,
    };
};
exports.getAdEventsByAdId = getAdEventsByAdId;
const getAllAdsForFilter = async () => {
    return await db_1.prisma.cmsAd.findMany({
        select: { id: true, title: true },
        orderBy: { title: 'asc' },
    });
};
exports.getAllAdsForFilter = getAllAdsForFilter;
