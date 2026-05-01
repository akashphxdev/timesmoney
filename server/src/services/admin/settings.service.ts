import { prisma } from '../../config/db';

export const getSettings = async () => {
  return await prisma.cmsSettings.upsert({
    where:  { key: 'global' },
    update: {},
    create: { key: 'global' },
  });
};

export const updateSettings = async (body: any) => {
  return await prisma.cmsSettings.upsert({
    where:  { key: 'global' },
    update: {
      whatsappNo:          body.whatsappNo,
      callingNo:           body.callingNo,
      supportEmail:        body.supportEmail,
      instagramUrl:        body.instagramUrl,
      linkedinUrl:         body.linkedinUrl,
      autoMailEnabled:     body.autoMailEnabled,
      autoWhatsappEnabled: body.autoWhatsappEnabled,
      maintenanceMode:     body.maintenanceMode,
    },
    create: { key: 'global' },
  });
};