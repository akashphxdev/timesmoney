import { Request, Response } from 'express';
import { validateCreateProduct, validateUpdateProduct } from '../../validators/admin/product.validator';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../../services/admin/product.service';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json({ success: true, data: products });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id as string);
    res.json({ success: true, data: product });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const errors = validateCreateProduct(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });
    const files = req.files as any;
    const product = await createProduct(req.body, files);
    res.status(201).json({ success: true, message: 'Product created', data: product });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const errors = validateUpdateProduct(req.body);
    if (errors.length > 0) return res.status(400).json({ success: false, errors });
    const files = req.files as any;
    const product = await updateProduct(req.params.id as string, req.body, files);
    res.json({ success: true, message: 'Product updated', data: product });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const result = await deleteProduct(req.params.id as string);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};