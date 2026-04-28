// src/controllers/admin/ad.controller.ts
import { Request, Response } from 'express';
import { validateCreateAd, validateUpdateAd } from '../../validators/admin/ad.validator';
import {
  getAllAds,
  getAdById,
  createAd,
  updateAd,
  deleteAd,
  toggleAdStatus,
} from '../../services/admin/ad.service';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const ads = await getAllAds();
    res.json({ success: true, data: ads });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const ad = await getAdById(id);
    res.json({ success: true, data: ad });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

// src/controllers/admin/ad.controller.ts

export const create = async (req: Request, res: Response) => {
  try {
    // FormData mein arrays string ya array aa sakte hain — normalize karo
    if (req.body.pages && !Array.isArray(req.body.pages)) {
      req.body.pages = [req.body.pages];
    }
    if (req.body.positions && !Array.isArray(req.body.positions)) {
      req.body.positions = [req.body.positions];
    }

    const errors = validateCreateAd(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Ad image is required' });
    }
    const image = `/uploads/ads/${req.file.filename}`;
    const ad = await createAd({ ...req.body, image });
    res.status(201).json({ success: true, message: 'Ad created', data: ad });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    if (req.body.pages && !Array.isArray(req.body.pages)) {
      req.body.pages = [req.body.pages];
    }
    if (req.body.positions && !Array.isArray(req.body.positions)) {
      req.body.positions = [req.body.positions];
    }

    const id = req.params.id as string;
    const errors = validateUpdateAd(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const newImage = req.file ? `/uploads/ads/${req.file.filename}` : undefined;
    const ad = await updateAd(id, req.body, newImage);
    res.json({ success: true, message: 'Ad updated', data: ad });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await deleteAd(id);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const toggle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const ad = await toggleAdStatus(id);
    res.json({ success: true, message: `Ad ${ad.active ? 'activated' : 'deactivated'}`, data: ad });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};