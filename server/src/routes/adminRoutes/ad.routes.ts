// src/routes/adminRoutes/ad.routes.ts
import { Router } from 'express';
import { getAll, getOne, create, update, remove, toggle } from '../../controllers/admin/ad.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';
import { uploadAdImage } from '../../middleware/upload.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadAdImage, create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadAdImage, update);
router.patch('/:id/toggle', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), toggle);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);

export default router;