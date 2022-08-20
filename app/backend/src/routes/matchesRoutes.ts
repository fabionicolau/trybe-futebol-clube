import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { newMatchesController } from '../injections/index';

const router = Router();

router.get('/', newMatchesController.getMatchesByProgress);
router.post('/', authMiddleware, newMatchesController.createMatches);
router.patch('/:id/finish', authMiddleware, newMatchesController.finishMatches);

export default router;
