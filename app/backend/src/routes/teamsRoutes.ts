import { Router } from 'express';
import { newTeamController } from '../injections/index';

const router = Router();

router.get('/', newTeamController.getAllTeams);
router.get('/:id', newTeamController.getTeamById);

export default router;
