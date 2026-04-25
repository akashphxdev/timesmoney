import { Request, Response } from 'express';
import { validateCreateCategory, validateUpdateCategory } from '../../validators/admin/category.validator';
import {
  getAllCategories, getCategoryById, createCategory,
  updateCategory, deleteCategory, toggleCategoryStatus,
} from '../../services/admin/category.service';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    res.json({ success: true, data: categories });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const category = await getCategoryById(id);
    res.json({ success: true, data: category });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const errors = validateCreateCategory(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    const imageUrl = req.file ? `/uploads/categories/${req.file.filename}` : undefined;
    const category = await createCategory({ ...req.body, imageUrl });
    res.status(201).json({ success: true, message: 'Category created', data: category });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const errors = validateUpdateCategory(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });

    const id = String(req.params.id);
    const newImageUrl = req.file ? `/uploads/categories/${req.file.filename}` : undefined;
    const category = await updateCategory(id, req.body, newImageUrl);
    res.json({ success: true, message: 'Category updated', data: category });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const result = await deleteCategory(id);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const toggle = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const category = await toggleCategoryStatus(id);
    res.json({ success: true, message: 'Status updated', data: category });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};