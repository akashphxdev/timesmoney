import { Request, Response } from 'express';
import { getAllBlogs, getBlogBySlug } from '../../services/public/public.blog.service';

// =====================
// GET ALL BLOGS
// =====================
export const getAllBlogsController = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const data = await getAllBlogs(page, limit);
    res.json({ success: true, data });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

// =====================
// GET BLOG BY SLUG
// =====================
export const getBlogBySlugController = async (req: Request, res: Response) => {
  try {
    const slug = req.params.slug as string; // ✅ type cast karo

    const blog = await getBlogBySlug(slug);

    if (!blog) {
      res.status(404).json({ success: false, message: 'Blog not found' });
      return;
    }

    res.json({ success: true, data: blog });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};