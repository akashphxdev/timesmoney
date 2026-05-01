import { Router } from 'express';
import {
  fetchAllProducts,
  fetchProductBySlug,
  fetchCategoryBySlug,
  fetchSubCategoryBySlug,
  fetchCompareProducts,
} from '../../controllers/public/product.controller';

const router = Router();

router.get('/products', fetchAllProducts);
router.get('/products/compare', fetchCompareProducts);
router.get('/products/:slug', fetchProductBySlug);
router.get('/categories/:slug', fetchCategoryBySlug);
router.get('/sub-categories/:slug', fetchSubCategoryBySlug);

export default router;