import sortLeaderBoard from '../helpers/sortLeaderBoard';
import LeaderBoardHelpers from '../helpers/LeaderBoards';
import { IAllMatches, IAwayMatches, IHomeMatches, ILeaderBoard,
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
      homeInstance.setLeaderBoard(team.homeMatches, 'home');
      const homeBoard = homeInstance.getLeaderBoard();

      return homeBoard;
    }));

    sortLeaderBoard(await homeData);

    return homeData;
  };

  getAwayLeaderBoard = async (): Promise<ILeaderBoard[]> => {
    const teams = await Teams.findAll({
      include: [
        { model: Matches, as: 'awayMatches', where: { inProgress: 0 } },
      ],
    }) as unknown as IAwayMatches[];

    const awayData = Promise.all(teams.map((team: IAwayMatches) => {
      const awayInstance = new LeaderBoardHelpers(team.teamName);
      awayInstance.setLeaderBoard(team.awayMatches, 'away');
      const awayBoard = awayInstance.getLeaderBoard();

      return awayBoard;
    }));

    sortLeaderBoard(await awayData);

    return awayData;
  };

  getAllLeaderBoard = async () => {
    const teams = await Teams.findAll({
      include: [
        { model: Matches, as: 'homeMatches', where: { inProgress: 0 } },
        { model: Matches, as: 'awayMatches', where: { inProgress: 0 } },
      ],
    }) as unknown as IAllMatches[];

    const allData = Promise.all(teams.map((team: IAllMatches) => {
      const allInstance = new LeaderBoardHelpers(team.teamName);
      allInstance.setLeaderBoard(team.homeMatches, 'home');
      allInstance.setLeaderBoard(team.awayMatches, 'away');
      const allBoard = allInstance.getLeaderBoard();

      return allBoard;
    }));

    sortLeaderBoard(await allData);

    return allData;
  };
}
