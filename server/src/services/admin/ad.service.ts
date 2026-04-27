// src/services/admin/ad.service.ts
import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';

export const getAllAds = async () => {
  return await prisma.cmsAd.findMany({
    select: {
      id: true,
      title: true,
      page: true,
      position: true,
      size: true,
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
      page: body.page,
      position: body.position,
      size: body.size || 'BANNER_300x250',
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

  // Delete old image if new one uploaded
  if (newImage && ad.image) deleteImage(ad.image);

  return await prisma.cmsAd.update({
    where: { id },
    data: {
      title: body.title ? body.title.trim() : ad.title,
      page: body.page || ad.page,
      position: body.position || ad.position,
      size: body.size || ad.size,
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

  // Delete image from disk
  if (ad.image) deleteImage(ad.image);

  // Delete all related events first, then the ad
  await prisma.cmsAdEvent.deleteMany({ where: { adId: id } });
  await prisma.cmsAd.delete({ where: { id } });

  return { message: 'Ad deleted successfully' };
};

// Toggle active status quickly
export const toggleAdStatus = async (id: string) => {
  const ad = await prisma.cmsAd.findUnique({ where: { id } });
  if (!ad) throw new Error('Ad not found');

  return await prisma.cmsAd.update({
    where: { id },
    data: { active: !ad.active },
  });
};