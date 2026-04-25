// src/controllers/admin/blog.controller.ts
import { Request, Response } from 'express';
import { validateCreateBlog, validateUpdateBlog } from '../../validators/admin/blog.validator';
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog } from '../../services/admin/blog.service';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const blogs = await getAllBlogs();
    res.json({ success: true, data: blogs });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const blog = await getBlogById(id);
    res.json({ success: true, data: blog });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const errors = validateCreateBlog(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const coverImage = req.file ? `/uploads/blog-covers/${req.file.filename}` : undefined;
    const blog = await createBlog({ ...req.body, coverImage });
    res.status(201).json({ success: true, message: 'Blog created', data: blog });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const errors = validateUpdateBlog(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const newCoverImage = req.file ? `/uploads/blog-covers/${req.file.filename}` : undefined;
    const blog = await updateBlog(id, req.body, newCoverImage);
    res.json({ success: true, message: 'Blog updated', data: blog });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await deleteBlog(id);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

// Content image upload
export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }
    const imageUrl = `/uploads/content/${req.file.filename}`;
    res.json({ success: true, path: imageUrl });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

// Content image delete
export const deleteContentImage = async (req: Request, res: Response) => {
  try {
    const { path: imagePath } = req.body;
    if (!imagePath) {
      return res.status(400).json({ success: false, message: 'Path is required' });
    }
    const { deleteImage } = await import('../../utils/imageHelper');
    deleteImage(imagePath);
    res.json({ success: true, message: 'Image deleted' });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};