export interface IBodyResults {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IBodyMatches extends IBodyResults {
  homeTeam: number;
  awayTeam: number;
}

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

export interface IMatchesCreated extends IBodyMatches {
  id: number;
  inProgress: boolean;
}

export interface IMatchesService {
  getMatchesByProgress(inProgress: string): Promise<IMatches[]>
  createMatches(body: IBodyMatches): Promise<IMatchesCreated>
  finishMatch(id: number): Promise<string>
  updateMatch(id: number, body: IBodyResults): Promise<string>
}
