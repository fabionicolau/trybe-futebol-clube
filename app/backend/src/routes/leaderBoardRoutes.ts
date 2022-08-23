import { Router } from 'express';
import { newLeaderBoardController } from '../injections/index';

const router = Router();

router.get('/home', newLeaderBoardController.getHomeLeaderBoard);

export default router;
