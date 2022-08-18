import { Router } from 'express';
// import authMiddleware from '../middlewares/authMiddleware';
import { newTeamController } from '../injections/index';

const router = Router();

router.get('/', newTeamController.getAllTeams);

export default router;
