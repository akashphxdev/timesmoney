// // Path: server/src/controllers/public/product.controller.ts

// import { Request, Response } from 'express';
// import {
//   getAllProducts,
//   getProductBySlug,
//   getCategoryBySlug,
//   getSubCategoryBySlug,
// } from '../../services/public/product.service';

// // ==================== GET ALL PRODUCTS ====================
// // GET /api/public/products
// // GET /api/public/products?category=investments
// // GET /api/public/products?category=investments&subCategory=nps

// export const fetchAllProducts = async (req: Request, res: Response) => {
//   try {
//     const categorySlug = req.query.category as string | undefined;
//     const subCategorySlug = req.query.subCategory as string | undefined;
//     const products = await getAllProducts(categorySlug, subCategorySlug);
//     res.json({ success: true, data: products });
//   } catch (error: unknown) {
//     const err = error as Error;
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // ==================== GET CATEGORY INFO ====================
// // GET /api/public/categories/:slug

// export const fetchCategoryBySlug = async (
//   req: Request<{ slug: string }>,
//   res: Response
// ) => {
//   try {
//     const slug = req.params.slug;
//     const category = await getCategoryBySlug(slug);
//     if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
//     res.json({ success: true, data: category });
//   } catch (error: unknown) {
//     const err = error as Error;
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // ==================== GET SUB-CATEGORY INFO ====================
// // GET /api/public/sub-categories/:slug

// export const fetchSubCategoryBySlug = async (
//   req: Request<{ slug: string }>,
//   res: Response
// ) => {
//   try {
//     const slug = req.params.slug;
//     const subCategory = await getSubCategoryBySlug(slug);
//     if (!subCategory) return res.status(404).json({ success: false, message: 'Sub-category not found' });
//     res.json({ success: true, data: subCategory });
//   } catch (error: unknown) {
//     const err = error as Error;
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // ==================== GET PRODUCT BY SLUG ====================
// // GET /api/public/products/:slug

// export const fetchProductBySlug = async (
//   req: Request<{ slug: string }>,
//   res: Response
// ) => {
//   try {
//     const { slug } = req.params;
//     const product = await getProductBySlug(slug);
//     res.json({ success: true, data: product });
//   } catch (error: unknown) {
//     const err = error as any;
//     const statusCode = err.statusCode ?? 500;
//     res.status(statusCode).json({ success: false, message: err.message });
//   }
// };


import { Request, Response } from 'express';
import {
  getAllProducts,
  getProductBySlug,
  getCategoryBySlug,
  getSubCategoryBySlug,
  getCompareProducts,             // ✅ NEW
} from '../../services/public/product.service';

export const fetchAllProducts = async (req: Request, res: Response) => {
  try {
    const categorySlug = req.query.category as string | undefined;
    const subCategorySlug = req.query.subCategory as string | undefined;
    const products = await getAllProducts(categorySlug, subCategorySlug);
    res.json({ success: true, data: products });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const fetchCategoryBySlug = async (req: Request<{ slug: string }>, res: Response) => {
  try {
    const category = await getCategoryBySlug(req.params.slug);
    if (!category) return res.status(404).json({ success: false, message: 'Category not found' });
    res.json({ success: true, data: category });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const fetchSubCategoryBySlug = async (req: Request<{ slug: string }>, res: Response) => {
  try {
    const subCategory = await getSubCategoryBySlug(req.params.slug);
    if (!subCategory) return res.status(404).json({ success: false, message: 'Sub-category not found' });
    res.json({ success: true, data: subCategory });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};

export const fetchProductBySlug = async (req: Request<{ slug: string }>, res: Response) => {
  try {
    const product = await getProductBySlug(req.params.slug);
    res.json({ success: true, data: product });
  } catch (error: unknown) {
    const err = error as any;
    res.status(err.statusCode ?? 500).json({ success: false, message: err.message });
  }
};

// ✅ NEW
export const fetchCompareProducts = async (req: Request, res: Response) => {
  try {
    const data = await getCompareProducts();
    res.json({ success: true, data });
  } catch (error: unknown) {
    const err = error as Error;
    res.status(500).json({ success: false, message: err.message });
  }
};