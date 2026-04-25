import { Request, Response } from 'express';
import { validateCreateTestimonial, validateUpdateTestimonial } from '../../validators/admin/testimonial.validator';
import {
  getAllTestimonials, getTestimonialById, createTestimonial,
  updateTestimonial, deleteTestimonial, toggleTestimonialActive, toggleTestimonialFeatured
} from '../../services/admin/testimonial.service';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const testimonials = await getAllTestimonials();
    res.json({ success: true, data: testimonials });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const testimonial = await getTestimonialById(req.params.id as string);
    res.json({ success: true, data: testimonial });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(404).json({ success: false, message: err.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const errors = validateCreateTestimonial(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const avatar = req.file ? `/uploads/testimonials/${req.file.filename}` : undefined;
    const testimonial = await createTestimonial({ ...req.body, avatar });
    res.status(201).json({ success: true, message: 'Testimonial created', data: testimonial });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const errors = validateUpdateTestimonial(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }
    const newAvatarUrl = req.file ? `/uploads/testimonials/${req.file.filename}` : undefined;
    const testimonial = await updateTestimonial(req.params.id as string, req.body, newAvatarUrl);
    res.json({ success: true, message: 'Testimonial updated', data: testimonial });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const result = await deleteTestimonial(req.params.id as string);
    res.json({ success: true, message: result.message });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const toggleActive = async (req: Request, res: Response) => {
  try {
    const testimonial = await toggleTestimonialActive(req.params.id as string);
    res.json({ success: true, message: 'Active status updated', data: testimonial });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};

export const toggleFeatured = async (req: Request, res: Response) => {
  try {
    const testimonial = await toggleTestimonialFeatured(req.params.id as string);
    res.json({ success: true, message: 'Featured status updated', data: testimonial });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(400).json({ success: false, message: err.message });
  }
};