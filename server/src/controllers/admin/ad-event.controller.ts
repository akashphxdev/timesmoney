// src/controllers/admin/ad-event.controller.ts
import { Request, Response } from 'express';
import {
  getAdEventStats,
  getAllAdEvents,
  getAdEventsByAdId,
  getAllAdsForFilter,
} from '../../services/admin/ad-event.service';

export const getStats = async (_req: Request, res: Response) => {
  try {
    const stats = await getAdEventStats();
    res.json({ success: true, data: stats });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const { adId, type, deviceType, startDate, endDate, page, limit } = req.query;
    const result = await getAllAdEvents({
      adId: adId as string,
      type: type as string,
      deviceType: deviceType as string,
      startDate: startDate as string,
      endDate: endDate as string,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
    });
    res.json({ success: true, ...result });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getByAdId = async (req: Request, res: Response) => {
  try {
    // ✅ Fix: string | string[] → string
    const adId = req.params.adId as string;
    const result = await getAdEventsByAdId(adId);
    res.json({ success: true, data: result });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const getAdsForFilter = async (_req: Request, res: Response) => {
  try {
    const ads = await getAllAdsForFilter();
    res.json({ success: true, data: ads });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};