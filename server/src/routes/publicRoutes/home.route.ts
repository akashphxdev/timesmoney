import { Router } from 'express';
import { homeData, submitHeroLead ,updateLeadEmail } from '../../controllers/public/home.controller';

const router = Router();

// GET  /api/public/home       → saara home page data
router.get('/', homeData);

// POST /api/public/home/lead  → hero form lead submit
router.post('/lead', submitHeroLead);
router.patch('/lead/:id', updateLeadEmail); // ← naya

export default router;