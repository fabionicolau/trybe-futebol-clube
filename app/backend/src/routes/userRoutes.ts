import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { newController } from '../injections/index';

const router = Router();

router.post('/', newController.userLogin);
router.get('/validate', authMiddleware, newController.userLoginAuth);

export default router;
