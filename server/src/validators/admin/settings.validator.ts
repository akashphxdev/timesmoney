import { z } from 'zod';

export const updateSettingsSchema = z.object({
  whatsappNo:          z.string().optional(),
  callingNo:           z.string().optional(),
  supportEmail:        z.string().email().optional(),
  instagramUrl:        z.string().url().optional(),
  linkedinUrl:         z.string().url().optional(),
  autoMailEnabled:     z.boolean().optional(),
  autoWhatsappEnabled: z.boolean().optional(),
  maintenanceMode:     z.boolean().optional(),
});

export type UpdateSettingsInput = z.infer<typeof updateSettingsSchema>;