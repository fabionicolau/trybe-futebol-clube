import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import { IMatches, IMatchesService } from '../interfaces/matchesInterfaces';

export default class MatchesService implements IMatchesService {
  getAllMatches = async (): Promise<IMatches[]> => {
    const matches = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as IMatches[];
  };

  getMatchesByProgress = async (inProgress: string): Promise<IMatches[]> => {
    if (!inProgress) {
      return this.getAllMatches();
    }

    const matches = await Matches.findAll({
      where: { inProgress: inProgress === 'true' },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });

    return matches as unknown as IMatches[];
  };
}
