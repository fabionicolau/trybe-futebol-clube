import { Router } from 'express';
import newController from '../injections/index';

const router = Router();

router.post('/', newController.userLogin);

export default router;
