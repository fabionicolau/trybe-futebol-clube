import teamsExistAndAreDifferent from '../validations/teamsValidate';
import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import {
  IBodyMatches,
  IBodyResults,
  IMatches,
  IMatchesCreated,
  IMatchesService } from '../interfaces/matchesInterfaces';

export default class MatchesService implements IMatchesService {
  private getAllMatches = async (): Promise<IMatches[]> => {
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

  createMatches = async (body: IBodyMatches): Promise<IMatchesCreated> => {
    await teamsExistAndAreDifferent(body);

    const match = { ...body, inProgress: 1 };
    const createdMatch: IMatchesCreated = await Matches.create(match);

    return createdMatch;
  };

  finishMatch = async (id: number): Promise<string> => {
    await Matches.update({ inProgress: 0 }, { where: { id } });
    return 'Finished';
  };

  updateMatch = async (id: number, body: IBodyResults): Promise<string> => {
    await Matches.update(body, { where: { id } });
    return 'The scoreboard has been updated';
  };
}
