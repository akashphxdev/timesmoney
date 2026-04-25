import { Router } from 'express';
import {
  getAllBlogsController,
  getBlogBySlugController,
} from '../../controllers/public/public.blog.controller';

const router = Router();

router.get('/', getAllBlogsController);         // GET /web/blogs
router.get('/:slug', getBlogBySlugController); // GET /web/blogs/:slug

export default router;