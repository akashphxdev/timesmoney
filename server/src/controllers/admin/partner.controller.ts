import { Request, Response } from 'express';
import { validateCreatePartner, validateUpdatePartner } from '../../validators/admin/partner.validator';
import {
  getAllPartners, getPartnerById, createPartner,
  updatePartner, deletePartner, togglePartnerStatus
} from '../../services/admin/partner.service';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const partners = await getAllPartners();
    res.json({ success: true, data: partners });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const partner = await getPartnerById(req.params.id as string);
    res.json({ success: true, data: partner });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const errors = validateCreatePartner(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const imageUrl = req.file ? `/uploads/partners/${req.file.filename}` : undefined;
    const partner = await createPartner({ ...req.body, imageUrl });
    res.status(201).json({ success: true, message: 'Partner created', data: partner });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const errors = validateUpdatePartner(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const newImageUrl = req.file ? `/uploads/partners/${req.file.filename}` : undefined;
    const partner = await updatePartner(req.params.id as string, req.body, newImageUrl);
    res.json({ success: true, message: 'Partner updated', data: partner });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const result = await deletePartner(req.params.id as string);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const toggle = async (req: Request, res: Response) => {
  try {
    const partner = await togglePartnerStatus(req.params.id as string);
    res.json({ success: true, message: 'Status updated', data: partner });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};