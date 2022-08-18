import { Request, Response } from 'express';
import errorHandler from '../middlewares/errorHandler';
import { ITeamsService } from '../interfaces/teamInterfaces';

export default class TeamsController {
  constructor(private teamsService: ITeamsService) {}

  getAllTeams = async (_req: Request, res: Response) => {
    const teams = await this.teamsService.getAllTeams();
    res.status(200).json(teams);
  };

  getTeamById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const team = await this.teamsService.getTeamById(+id);
      res.status(200).json(team);
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };
}
