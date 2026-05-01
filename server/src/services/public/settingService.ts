import { prisma } from '../../config/db';

export const getPublicSettings = async () => {
  const settings = await prisma.cmsSettings.findFirst({
    select: {
      whatsappNo: true,
      callingNo: true,
      supportEmail: true,
      instagramUrl: true,
      linkedinUrl: true,
      autoMailEnabled: true,
      autoWhatsappEnabled: true,
    },
  });

  return settings;
};