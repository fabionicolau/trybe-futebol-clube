import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { newMatchesController } from '../injections/index';

const router = Router();

router.get('/', newMatchesController.getMatchesByProgress);
router.post('/', authMiddleware, newMatchesController.createMatches);
router.patch('/:id', authMiddleware, newMatchesController.updateMatch);
router.patch('/:id/finish', authMiddleware, newMatchesController.finishMatch);

export default router;
