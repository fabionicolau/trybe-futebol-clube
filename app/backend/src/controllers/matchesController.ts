import { Request, Response } from 'express';
import errorHandler from '../middlewares/errorHandler';
import { IMatchesService } from '../interfaces/matchesInterfaces';

export default class MatchesController {
  constructor(private matchesService: IMatchesService) {}

  getMatchesByProgress = async (req: Request, res: Response) => {
    try {
      const { inProgress } = req.query;
      const matches = await this.matchesService
        .getMatchesByProgress(inProgress as string);
      res.status(200).json(matches);
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };

  createMatches = async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const matches = await this.matchesService.createMatches(body);
      res.status(201).json(matches);
    } catch (error) {
      console.log(error);
      errorHandler(error as Error, req, res);
    }
  };
}
