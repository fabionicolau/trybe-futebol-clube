import { Router } from 'express';
// import authMiddleware from '../middlewares/authMiddleware';
import { newMatchesController } from '../injections/index';

const router = Router();

router.get('/', newMatchesController.getAllMatches);

export default router;
