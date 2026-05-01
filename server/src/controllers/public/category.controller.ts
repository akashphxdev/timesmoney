import { Request, Response } from 'express';
import { getAllCategories, getSubCategoriesByCategorySlug } from '../../services/public/category.service';
import { slugParamSchema } from '../../validators/public/category.validation';

// GET /api/categories
export const getAllCategoriesHandler = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();

    return res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    console.error('getAllCategories error:', error);
    return res.status(500).json({
      success: false,
      message: 'Categories fetch nahi hui',
    });
  }
};

// GET /api/categories/:slug/sub-categories
export const getSubCategoriesByCategorySlugHandler = async (req: Request, res: Response) => {
  try {
    const { slug } = req.query as { slug: string };
    
    if (!slug) {
      return res.status(400).json({
        success: false,
        message: 'Slug required hai',
      });
    }

    const category = await getSubCategoriesByCategorySlug(slug);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category nahi mili',
      });
    }

    return res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error('getSubCategoriesByCategorySlug error:', error);
    return res.status(500).json({
      success: false,
      message: 'Sub-categories fetch nahi hui',
    });
  }
};