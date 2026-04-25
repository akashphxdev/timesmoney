import { Router } from 'express';
import { getStats } from '../../controllers/admin/dashboard.controller';
import { isAuthenticated } from '../../middleware/auth.middleware';

const router = Router();

router.get('/stats', isAuthenticated, getStats);

export default router;