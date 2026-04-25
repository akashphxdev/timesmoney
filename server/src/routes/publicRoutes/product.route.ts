// // Path: server/src/routes/public/product.routes.ts

// import { Router } from 'express';
// import {
//   fetchAllProducts,
//   fetchProductBySlug,
//   fetchCategoryBySlug,
//   fetchSubCategoryBySlug,
// } from '../../controllers/public/product.controller';

// const router = Router();

// // Products
// router.get('/products', fetchAllProducts);
// router.get('/products/:slug', fetchProductBySlug);

// // Categories (for page metadata)
// router.get('/categories/:slug', fetchCategoryBySlug);
// router.get('/sub-categories/:slug', fetchSubCategoryBySlug);

// export default router;


import { Router } from 'express';
import {
  fetchAllProducts,
  fetchProductBySlug,
  fetchCategoryBySlug,
  fetchSubCategoryBySlug,
  fetchCompareProducts,           // ✅ NEW
} from '../../controllers/public/product.controller';

const router = Router();

router.get('/products', fetchAllProducts);
router.get('/products/compare', fetchCompareProducts);   // ✅ NEW — /products/:slug se PEHLE rakhna zaroori hai
router.get('/products/:slug', fetchProductBySlug);
router.get('/categories/:slug', fetchCategoryBySlug);
router.get('/sub-categories/:slug', fetchSubCategoryBySlug);

export default router;