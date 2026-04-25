import { Router } from 'express';
import { getAll, getOne, update, remove } from '../../controllers/admin/lead.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);

export default router;