import { Request, Response } from 'express';
import { getDashboardStats } from '../../services/admin/dashboard.service';

export const getStats = async (_req: Request, res: Response) => {
  try {
    const stats = await getDashboardStats();
    res.json({ success: true, data: stats });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};