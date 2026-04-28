import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';

export const getAllAds = async () => {
  return await prisma.cmsAd.findMany({
    select: {
      id: true,
      title: true,
      pages: true,
      positions: true,
      size: true,
      customWidth: true,
      customHeight: true,
      image: true,
      link: true,
      active: true,
      sortOrder: true,
      startDateTime: true,
      endDateTime: true,
      createdAt: true,
      _count: {
        select: { events: true },
      },
    },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
  });
};

export const getAdById = async (id: string) => {
  const ad = await prisma.cmsAd.findUnique({
    where: { id },
    include: {
      _count: { select: { events: true } },
    },
  });
  if (!ad) throw new Error('Ad not found');
  return ad;
};

export const createAd = async (body: any) => {
  return await prisma.cmsAd.create({
    data: {
      title: body.title.trim(),
      pages: Array.isArray(body.pages) ? body.pages : [],
      positions: Array.isArray(body.positions) ? body.positions : [],
      size: body.size || 'BANNER_300x250',
      customWidth: body.size === 'CUSTOM' ? Number(body.customWidth) : null,
      customHeight: body.size === 'CUSTOM' ? Number(body.customHeight) : null,
      image: body.image,
      link: body.link || null,
      active: body.active !== undefined ? body.active === 'true' || body.active === true : true,
      sortOrder: body.sortOrder ? Number(body.sortOrder) : 0,
      startDateTime: body.startDateTime ? new Date(body.startDateTime) : null,
      endDateTime: body.endDateTime ? new Date(body.endDateTime) : null,
    },
  });
};

export const updateAd = async (id: string, body: any, newImage?: string) => {
  const ad = await prisma.cmsAd.findUnique({ where: { id } });
  if (!ad) throw new Error('Ad not found');

  if (newImage && ad.image) deleteImage(ad.image);

  const size = body.size || ad.size;

  return await prisma.cmsAd.update({
    where: { id },
    data: {
      title: body.title ? body.title.trim() : ad.title,
      pages: Array.isArray(body.pages) ? body.pages : ad.pages,
      positions: Array.isArray(body.positions) ? body.positions : ad.positions,
      size,
      customWidth: size === 'CUSTOM' ? Number(body.customWidth) : null,
      customHeight: size === 'CUSTOM' ? Number(body.customHeight) : null,
      image: newImage || ad.image,
      link: body.link !== undefined ? body.link || null : ad.link,
      active: body.active !== undefined ? body.active === 'true' || body.active === true : ad.active,
      sortOrder: body.sortOrder !== undefined ? Number(body.sortOrder) : ad.sortOrder,
      startDateTime: body.startDateTime ? new Date(body.startDateTime) : body.startDateTime === '' ? null : ad.startDateTime,
      endDateTime: body.endDateTime ? new Date(body.endDateTime) : body.endDateTime === '' ? null : ad.endDateTime,
    },
  });
};

export const deleteAd = async (id: string) => {
  const ad = await prisma.cmsAd.findUnique({ where: { id } });
  if (!ad) throw new Error('Ad not found');

  if (ad.image) deleteImage(ad.image);

  await prisma.cmsAdEvent.deleteMany({ where: { adId: id } });
  await prisma.cmsAd.delete({ where: { id } });

  return { message: 'Ad deleted successfully' };
};

export const toggleAdStatus = async (id: string) => {
  const ad = await prisma.cmsAd.findUnique({ where: { id } });
  if (!ad) throw new Error('Ad not found');

  return await prisma.cmsAd.update({
    where: { id },
    data: { active: !ad.active },
  });
};