import { prisma } from '../../config/db';

export const getActiveAds = async (page: string, position?: string) => {
  const now = new Date();

  return await prisma.cmsAd.findMany({
    where: {
      active: true,
      pages: { has: page as any },
      ...(position ? { positions: { has: position as any } } : {}),
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

export const trackAdEvent = async (body: {
  adId: string;
  type: 'CLICK' | 'IMPRESSION';
  ip?: string;
  sessionId?: string;
  userAgent?: string;
  deviceType?: string;
  page?: string;
  referrer?: string;
  country?: string;
}) => {
  const { adId, type, ip, sessionId, userAgent, deviceType, page, referrer, country } = body;

  let isUnique = true;
  if (ip) {
    const existing = await prisma.cmsAdEvent.findFirst({
      where: { adId, type, ip },
    });
    if (existing) isUnique = false;
  }

  return await prisma.cmsAdEvent.create({
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