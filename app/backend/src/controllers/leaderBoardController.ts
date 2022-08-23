import { Request, Response } from 'express';
import errorHandler from '../middlewares/errorHandler';
import { ILeaderBoardService } from '../interfaces/leaderBoardInterface';

export default class LeaderBoardController {
  constructor(private LeaderboardService: ILeaderBoardService) {}

  getHomeLeaderBoard = async (req: Request, res: Response) => {
    try {
      const homeBoard = await this.LeaderboardService.getHomeLeaderBoard();

      res.status(200).json(homeBoard);
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };
}
