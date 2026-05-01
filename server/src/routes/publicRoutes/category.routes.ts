import { Router } from 'express';
import { getAllCategoriesHandler, getSubCategoriesByCategorySlugHandler } from '../../controllers/public/category.controller';

const router = Router();

// GET /api/categories
router.get('/', getAllCategoriesHandler);

// GET /api/categories/:slug/sub-categories
router.get('/sub-categories', getSubCategoriesByCategorySlugHandler);

export default router;