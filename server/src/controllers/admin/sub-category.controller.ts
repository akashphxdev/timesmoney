import { Request, Response } from 'express';
import { validateCreateSubCategory, validateUpdateSubCategory } from '../../validators/admin/sub-category.validator';
import {
  getAllSubCategories, getSubCategoryById, createSubCategory,
  updateSubCategory, deleteSubCategory, toggleSubCategoryStatus,
} from '../../services/admin/sub-category.service';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const subs = await getAllSubCategories();
    res.json({ success: true, data: subs });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const sub = await getSubCategoryById(id);
    res.json({ success: true, data: sub });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const errors = validateCreateSubCategory(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    const imageUrl = req.file ? `/uploads/sub-categories/${req.file.filename}` : undefined;
    const sub = await createSubCategory({ ...req.body, imageUrl });
    res.status(201).json({ success: true, message: 'Sub-category created', data: sub });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const errors = validateUpdateSubCategory(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    const id = String(req.params.id);
    const newImageUrl = req.file ? `/uploads/sub-categories/${req.file.filename}` : undefined;
    const sub = await updateSubCategory(id, req.body, newImageUrl);
    res.json({ success: true, message: 'Sub-category updated', data: sub });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const result = await deleteSubCategory(id);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const toggle = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const sub = await toggleSubCategoryStatus(id);
    res.json({ success: true, message: 'Status updated', data: sub });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};