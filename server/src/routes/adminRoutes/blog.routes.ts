import { Router } from 'express';
import {
  getAll, getOne, create, update, remove,
  uploadImage, deleteContentImage
} from '../../controllers/admin/blog.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';
import { uploadBlogCover, uploadContent } from '../../middleware/upload.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadBlogCover, create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadBlogCover, update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);

// Content image routes
router.post('/upload/image', isAuthenticated, uploadContent, uploadImage);
router.delete('/upload/image', isAuthenticated, deleteContentImage);

export default router;