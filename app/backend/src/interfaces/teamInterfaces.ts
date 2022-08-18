export interface ITeam {
  id?: number;
  teamName: string;
}

export interface ITeamsService {
  getAllTeams(): Promise<ITeam[]>;
  getTeamById(id: number): Promise<ITeam | null>;
}
