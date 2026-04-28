// src/services/admin/ad-event.service.ts
import { prisma } from '../../config/db';

export const getAdEventStats = async () => {
  const [totalClicks, totalImpressions, uniqueClicks, uniqueImpressions] = await Promise.all([
    prisma.cmsAdEvent.count({ where: { type: 'CLICK' } }),
    prisma.cmsAdEvent.count({ where: { type: 'IMPRESSION' } }),
    prisma.cmsAdEvent.count({ where: { type: 'CLICK', isUnique: true } }),
    prisma.cmsAdEvent.count({ where: { type: 'IMPRESSION', isUnique: true } }),
  ]);

  return { totalClicks, totalImpressions, uniqueClicks, uniqueImpressions };
};

export const getAllAdEvents = async (filters: {
  adId?: string;
  type?: string;
  deviceType?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
}) => {
  const { adId, type, deviceType, startDate, endDate, page = 1, limit = 20 } = filters;

  const where: any = {};
  if (adId) where.adId = adId;
  if (type) where.type = type;
  if (deviceType) where.deviceType = deviceType;
  if (startDate || endDate) {
    where.createdAt = {};
    if (startDate) where.createdAt.gte = new Date(startDate);
    if (endDate) where.createdAt.lte = new Date(endDate);
  }

  const skip = (page - 1) * limit;

  const [events, total] = await Promise.all([
    prisma.cmsAdEvent.findMany({
      where,
      include: {
        ad: { select: { id: true, title: true, pages: true, positions: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    }),
    prisma.cmsAdEvent.count({ where }),
  ]);

  return {
    events,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

export const getAdEventsByAdId = async (adId: string) => {
  const ad = await prisma.cmsAd.findUnique({ where: { id: adId } });
  if (!ad) throw new Error('Ad not found');

  const [clicks, impressions, uniqueClicks, uniqueImpressions, deviceBreakdown, recentEvents] =
    await Promise.all([
      prisma.cmsAdEvent.count({ where: { adId, type: 'CLICK' } }),
      prisma.cmsAdEvent.count({ where: { adId, type: 'IMPRESSION' } }),
      prisma.cmsAdEvent.count({ where: { adId, type: 'CLICK', isUnique: true } }),
      prisma.cmsAdEvent.count({ where: { adId, type: 'IMPRESSION', isUnique: true } }),
      prisma.cmsAdEvent.groupBy({
        by: ['deviceType'],
        where: { adId },
        _count: { _all: true },
      }),
      prisma.cmsAdEvent.findMany({
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

export const getAllAdsForFilter = async () => {
  return await prisma.cmsAd.findMany({
    select: { id: true, title: true },
    orderBy: { title: 'asc' },
  });
};