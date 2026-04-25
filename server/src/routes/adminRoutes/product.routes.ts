import { Router } from 'express';
import { getAll, getOne, create, update, remove } from '../../controllers/admin/product.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';
import { uploadProductImages } from '../../middleware/upload.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadProductImages, create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadProductImages, update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);

export default router;