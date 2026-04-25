import { Router } from 'express';
import { getAll, getOne, create, update, remove } from '../../controllers/admin/admin.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';

const router = Router();

// Sirf SUPER_ADMIN admin manage kar sakta hai
router.get('/', isAuthenticated, authorizeRoles('SUPER_ADMIN'), getAll);
router.get('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN'), create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);

export default router;