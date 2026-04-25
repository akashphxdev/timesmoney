import { Router } from 'express';
import { getAll, getOne, create, update, remove, toggle } from '../../controllers/admin/partner.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';
import { uploadPartnerImage } from '../../middleware/upload.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadPartnerImage, create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadPartnerImage, update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);
router.patch('/:id/toggle', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), toggle);

export default router;