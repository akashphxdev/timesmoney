import { Router } from 'express';
import { getAll, getOne, create, update, remove } from '../../controllers/admin/ad.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';
import { uploadAdImage } from '../../middleware/upload.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadAdImage, create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadAdImage, update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);

export default router;