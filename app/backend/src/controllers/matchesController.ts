import { Request, Response } from 'express';
import errorHandler from '../middlewares/errorHandler';
import { IMatchesService } from '../interfaces/matchesInterfaces';

export default class MatchesController {
  constructor(private matchesService: IMatchesService) {}

  getAllMatches = async (req: Request, res: Response) => {
    try {
      const matches = await this.matchesService.getAllMatches();

      res.status(200).json(matches);
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };
}
