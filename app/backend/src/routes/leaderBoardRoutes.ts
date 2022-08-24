import { Router } from 'express';
import { newLeaderBoardController } from '../injections/index';

const router = Router();

router.get('/home', newLeaderBoardController.getHomeLeaderBoard);
router.get('/away', newLeaderBoardController.getAwayLeaderBoard);
router.get('/', newLeaderBoardController.getAllLeaderBoard);

export default router;
