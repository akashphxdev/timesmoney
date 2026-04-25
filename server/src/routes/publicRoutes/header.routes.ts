import { Router } from 'express';
import { headerData } from '../../controllers/public/header.controller';

const router = Router();

router.get('/', headerData);

export default router;