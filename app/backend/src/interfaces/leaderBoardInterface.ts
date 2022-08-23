import { IMatchesCreated } from './matchesInterfaces';

export interface ILeaderBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export interface IHomeMatches {
  id: number,
  teamName: string,
  homeMatches: IMatchesCreated[]
}

export interface IAwayMatches {
  id: number,
  teamName: string,
  awayMatches: IMatchesCreated[]
}

export interface ILeaderBoardService {
  getHomeLeaderBoard(): Promise<ILeaderBoard[]>
  getAwayLeaderBoard(): Promise<ILeaderBoard[]>
}
