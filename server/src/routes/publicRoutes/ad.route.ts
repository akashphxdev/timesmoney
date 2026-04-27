// src/routes/publicRoutes/ad.route.ts
import { Router } from 'express';
import { getAds, trackEvent } from '../../controllers/public/ad.controller';

const router = Router();

router.get('/', getAds);         // GET /public/ads?page=CALCULATOR&position=TOP
router.post('/track', trackEvent); // POST /public/ads/track

export default router;