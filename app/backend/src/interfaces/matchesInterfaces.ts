export interface IMatches extends IBodyMatches {
  id?: number;
  inProgress: boolean;
  teamHome: {
    teamName: string;
  }
  teamAway: {
    teamName: string;
  }
}

export interface IBodyMatches {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatchesCreated extends IBodyMatches {
  id: number;
  inProgress: boolean;
}

export interface IMatchesService {
  getAllMatches(): Promise<IMatches[]>
  getMatchesByProgress(inProgress: string): Promise<IMatches[]>
  createMatches(body: IBodyMatches): Promise<IMatchesCreated>
  finishMatch(id: number): Promise<string>
}
