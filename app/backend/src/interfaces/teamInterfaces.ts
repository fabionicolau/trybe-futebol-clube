export interface ITeam {
  id?: number;
  teamName: string;
}

export interface ITeamsService {
  getAllTeams(): Promise<ITeam[]>;
}
