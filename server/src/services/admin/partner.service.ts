import { prisma } from '../../config/db';
import { deleteImage } from '../../utils/imageHelper';

export const getAllPartners = async () => {
  return await prisma.cmsPartner.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

export const getPartnerById = async (id: string) => {
  const partner = await prisma.cmsPartner.findUnique({ where: { id } });
  if (!partner) throw new Error('Partner not found');
  return partner;
};

export const createPartner = async (body: {
  name: string;
  imageUrl?: string;
  isActive?: boolean;
}) => {
  return await prisma.cmsPartner.create({
    data: {
      name: body.name,
      imageUrl: body.imageUrl,
      isActive: body.isActive !== undefined ? Boolean(body.isActive) : true,
    },
  });
};

export const updatePartner = async (id: string, body: any, newImageUrl?: string) => {
  const partner = await prisma.cmsPartner.findUnique({ where: { id } });
  if (!partner) throw new Error('Partner not found');

  // Purani image delete karo agar nayi aayi hai
  if (newImageUrl && partner.imageUrl) {
    deleteImage(partner.imageUrl);
  }

  return await prisma.cmsPartner.update({
    where: { id },
    data: {
      name: body.name !== undefined ? body.name : partner.name,
      imageUrl: newImageUrl || partner.imageUrl,
      isActive: body.isActive !== undefined ? body.isActive === 'true' || body.isActive === true : partner.isActive,
    },
  });
};

export const deletePartner = async (id: string) => {
  const partner = await prisma.cmsPartner.findUnique({ where: { id } });
  if (!partner) throw new Error('Partner not found');

  if (partner.imageUrl) deleteImage(partner.imageUrl);

  await prisma.cmsPartner.delete({ where: { id } });
  return { message: 'Partner deleted successfully' };
};

export const togglePartnerStatus = async (id: string) => {
  const partner = await prisma.cmsPartner.findUnique({ where: { id } });
  if (!partner) throw new Error('Partner not found');

  return await prisma.cmsPartner.update({
    where: { id },
    data: { isActive: !partner.isActive },
  });
};