import { ITeamsService } from '../interfaces/teamInterfaces';
import Teams from '../database/models/Teams';

export default class TeamsService implements ITeamsService {
  getAllTeams = () => {
    const teams = Teams.findAll();
    return teams;
  };
}
