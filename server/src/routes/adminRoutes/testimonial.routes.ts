import { Router } from 'express';
import { getAll, getOne, create, update, remove, toggleActive, toggleFeatured } from '../../controllers/admin/testimonial.controller';
import { isAuthenticated, authorizeRoles } from '../../middleware/auth.middleware';
import { uploadTestimonialAvatar } from '../../middleware/upload.middleware';

const router = Router();

router.get('/', isAuthenticated, getAll);
router.get('/:id', isAuthenticated, getOne);
router.post('/', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadTestimonialAvatar, create);
router.patch('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), uploadTestimonialAvatar, update);
router.delete('/:id', isAuthenticated, authorizeRoles('SUPER_ADMIN'), remove);
router.patch('/:id/toggle', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), toggleActive);
router.patch('/:id/featured', isAuthenticated, authorizeRoles('SUPER_ADMIN', 'EDITOR'), toggleFeatured);

export default router;