import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { newUserController } from '../injections/index';

const router = Router();

router.post('/', newUserController.userLogin);
router.get('/validate', authMiddleware, newUserController.userLoginAuth);

export default router;
