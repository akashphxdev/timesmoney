import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';
import { AdPlacement } from '../../generated/prisma';

// Helper: parse placement from body (FormData sends strings)
const parseplacement = (placement: any): AdPlacement[] => {
  if (!placement) return [];
  const arr = Array.isArray(placement) ? placement : [placement];
  return arr as AdPlacement[];
};

export const getAllAds = async () => {
  return await prisma.cmsAd.findMany({
    select: {
      id: true,
      title: true,
      image: true,
      link: true,
      placement: true,   // ✅ array
      active: true,
      clicks: true,
      impressions: true,
      sortOrder: true,
      startDate: true,
      endDate: true,
      createdAt: true,
      category: { select: { id: true, name: true } },
    },
    orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
  });
};

export const getAdById = async (id: string) => {
  const ad = await prisma.cmsAd.findUnique({
    where: { id },
    include: { category: { select: { id: true, name: true } } },
  });
  if (!ad) throw new Error('Ad not found');
  return ad;
};

export const createAd = async (body: any) => {
  return await prisma.cmsAd.create({
    data: {
      title: body.title,
      image: body.image,
      link: body.link || null,
      placement: { set: parseplacement(body.placement) },  // ✅
      categoryId: body.categoryId || null,
      startDate: body.startDate ? new Date(body.startDate) : null,
      endDate: body.endDate ? new Date(body.endDate) : null,
      active: body.active === 'false' || body.active === false ? false : true,
      sortOrder: body.sortOrder ? parseInt(body.sortOrder) : 0,
    },
  });
};

export const updateAd = async (id: string, body: any, newImage?: string) => {
  const ad = await prisma.cmsAd.findUnique({ where: { id } });
  if (!ad) throw new Error('Ad not found');

  if (newImage && ad.image) deleteImage(ad.image);

  return await prisma.cmsAd.update({
    where: { id },
    data: {
      title: body.title ?? ad.title,
      image: newImage || ad.image,
      link: body.link ?? ad.link,
      ...(body.placement !== undefined && {
        placement: { set: parseplacement(body.placement) },  // ✅
      }),
      categoryId: body.categoryId || null,
      startDate: body.startDate ? new Date(body.startDate) : ad.startDate,
      endDate: body.endDate ? new Date(body.endDate) : ad.endDate,
      active: body.active === 'false' || body.active === false ? false : true,
      sortOrder: body.sortOrder ? parseInt(body.sortOrder) : ad.sortOrder,
    },
  });
};

export const deleteAd = async (id: string) => {
  const ad = await prisma.cmsAd.findUnique({ where: { id } });
  if (!ad) throw new Error('Ad not found');

  if (ad.image) deleteImage(ad.image);

  await prisma.cmsAd.delete({ where: { id } });
  return { message: 'Ad deleted successfully' };
};