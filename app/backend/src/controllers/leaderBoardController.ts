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

  getAwayLeaderBoard = async (req: Request, res: Response) => {
    try {
      const awayBoard = await this.LeaderboardService.getAwayLeaderBoard();

      res.status(200).json(awayBoard);
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };

  getAllLeaderBoard = async (req: Request, res: Response) => {
    try {
      const allBoard = await this.LeaderboardService.getAllLeaderBoard();

      res.status(200).json(allBoard);
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };
}
