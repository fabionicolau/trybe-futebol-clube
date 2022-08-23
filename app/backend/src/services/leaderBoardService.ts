import sortLeaderBoard from '../helpers/sortLeaderBoard';
import LeaderBoardHelpers from '../helpers/LeaderBoards';
import { IHomeMatches, ILeaderBoard,
  ILeaderBoardService } from '../interfaces/leaderBoardInterface';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class LeaderBoardService implements ILeaderBoardService {
  getHomeLeaderBoard = async (): Promise<ILeaderBoard[]> => {
    const teams = await Teams.findAll({
      include: [
        { model: Matches, as: 'homeMatches', where: { inProgress: 0 } },
      ],
    }) as unknown as IHomeMatches[];

    const homeData = Promise.all(teams.map((team: IHomeMatches) => {
      const homeInstance = new LeaderBoardHelpers(team.teamName);
      const homeBoard = homeInstance.getLeaderboard(team.homeMatches);

      return homeBoard;
    }));

    sortLeaderBoard(await homeData);

    return homeData;
  };
}
