import { ITeam, ITeamsService } from '../interfaces/teamInterfaces';
import Teams from '../database/models/Teams';

export default class TeamsService implements ITeamsService {
  getAllTeams = async (): Promise<ITeam[]> => {
    const teams: ITeam[] = await Teams.findAll();
    return teams;
  };

  getTeamById = async (id: number): Promise<ITeam | null> => {
    const team = await Teams.findOne({ where: { id } });

    if (!team) {
      const error = new Error('Team not found');
      error.name = 'notFound';
      throw error;
    }

    return team as ITeam;
  };
}
