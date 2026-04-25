import { Router } from 'express';
import { getAll, getOne, create, update, remove, toggle } from '../../controllers/admin/category.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';
import { uploadCategoryImage } from '../../middleware/upload.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadCategoryImage, create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadCategoryImage, update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);
router.patch('/:id/toggle', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), toggle);

export default router;