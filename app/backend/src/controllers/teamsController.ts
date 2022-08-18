import { Request, Response } from 'express';
import { ITeamsService } from '../interfaces/teamInterfaces';

export default class TeamsController {
  constructor(private teamsService: ITeamsService) {}

  getAllTeams = async (_req: Request, res: Response) => {
    const teams = await this.teamsService.getAllTeams();
    res.status(200).json(teams);
  };
}
