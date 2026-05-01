import { Request, Response } from 'express';
import { getPublicSettings } from '../../services/public/settingService';

export const getSettingsHandler = async (req: Request, res: Response) => {
  try {
    const settings = await getPublicSettings();

    return res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error('getSettingsHandler error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};