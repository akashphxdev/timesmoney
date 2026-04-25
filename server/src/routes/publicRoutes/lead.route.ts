import { Router } from 'express';
import { submitProductLead } from '../../controllers/public/lead.controller';

const router = Router();

// POST /api/public/leads/product
router.post('/product', submitProductLead);

export default router;