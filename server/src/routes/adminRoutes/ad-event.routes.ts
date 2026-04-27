// src/routes/adminRoutes/ad-event.routes.ts
import { Router } from 'express';
import { getStats, getAll, getByAdId, getAdsForFilter } from '../../controllers/admin/ad-event.controller';
import { isAuthenticated } from '../../middleware/auth.middleware';

const router = Router();

router.get('/stats', isAuthenticated, getStats);           // Overall stats
router.get('/ads-list', isAuthenticated, getAdsForFilter); // Ads dropdown filter
router.get('/', isAuthenticated, getAll);                  // All events (paginated + filtered)
router.get('/:adId', isAuthenticated, getByAdId);          // Events by specific ad

export default router;