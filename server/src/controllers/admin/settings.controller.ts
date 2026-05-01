import { Request, Response } from 'express';
import { getSettings, updateSettings } from '../../services/admin/settings.service';
import { updateSettingsSchema } from '../../validators/admin/settings.validator';

export const settingsController = {

  async getSettings(req: Request, res: Response) {
    try {
      const settings = await getSettings();
      res.json({ success: true, data: settings });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch settings' });
    }
  },

  async updateSettings(req: Request, res: Response) {
    try {
      const parsed = updateSettingsSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ success: false, errors: parsed.error.flatten() });
        }
      const settings = await updateSettings(parsed.data);
      res.json({ success: true, data: settings });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update settings' });
    }
  },

};