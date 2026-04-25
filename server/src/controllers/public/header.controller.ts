import { Request, Response } from 'express';
import { getHeaderData } from '../../services/public/header.service';

export const headerData = async (_req: Request, res: Response) => {
  try {
    const data = await getHeaderData();
    res.json({ success: true, data });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};