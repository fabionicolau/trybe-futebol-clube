import { Router } from 'express';
import { newLeaderBoardController } from '../injections/index';

const router = Router();

router.get('/home', newLeaderBoardController.getHomeLeaderBoard);
router.get('/away', newLeaderBoardController.getAwayLeaderBoard);

export default router;
