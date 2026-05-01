import { Router } from 'express';
import { getSettingsHandler } from '../../controllers/public/settingController';

const router = Router();

router.get('/', getSettingsHandler);

export default router;