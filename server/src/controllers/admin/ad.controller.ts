import { Request, Response } from 'express';
import { validateCreateAd, validateUpdateAd } from '../../validators/admin/ad.validator';
import { getAllAds, getAdById, createAd, updateAd, deleteAd } from '../../services/admin/ad.service';

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
    const ad = await getAdById(req.params.id as string);
    res.json({ success: true, data: ad });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const errors = validateCreateAd(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    if (!req.file) return res.status(400).json({ success: false, message: 'Image is required' });

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
    const errors = validateUpdateAd(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    const newImage = req.file ? `/uploads/ads/${req.file.filename}` : undefined;
    const ad = await updateAd(req.params.id as string, req.body, newImage);
    res.json({ success: true, message: 'Ad updated', data: ad });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const result = await deleteAd(req.params.id as string);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};