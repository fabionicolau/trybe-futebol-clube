import { ILeaderBoard } from '../interfaces/leaderBoardInterface';
import { IMatchesCreated } from '../interfaces/matchesInterfaces';

export default class LeaderBoardHelpers {
  private _name: string;
  private _totalPoints: number;
  private _totalGames: number;
  private _totalVictories: number;
  private _totalDraws: number;
  private _totalLosses: number;
  private _goalsFavor: number;
  private _goalsOwn: number;
  private _goalsBalance: number;
  private _efficiency: number;

  constructor(private name: string) {
    this._name = this.name;
    this._totalPoints = 0;
    this._totalGames = 0;
    this._totalVictories = 0;
    this._totalDraws = 0;
    this._totalLosses = 0;
    this._goalsFavor = 0;
    this._goalsOwn = 0;
    this._goalsBalance = 0;
    this._efficiency = 100;
  }

  setResults = (matches: IMatchesCreated[], place: 'home' | 'away'): void => {
    matches.forEach((match) => {
      if (place === 'home') {
        if (match.homeTeamGoals > match.awayTeamGoals) {
          this._totalVictories += 1;
        } else if (match.homeTeamGoals === match.awayTeamGoals) {
          this._totalDraws += 1;
        } else {
          this._totalLosses += 1;
        }
      } else if (match.homeTeamGoals < match.awayTeamGoals) {
        this._totalVictories += 1;
      } else if (match.homeTeamGoals === match.awayTeamGoals) {
        this._totalDraws += 1;
      } else {
        this._totalLosses += 1;
      }
    });
  };

  setTotalGames = (match: IMatchesCreated[]): void => {
    this._totalGames = match.length;
  };

  setPoints = (): void => {
    this._totalPoints = this._totalVictories * 3 + this._totalDraws;
  };

  setTotalGoalsScored = (matches: IMatchesCreated[], place: 'home' | 'away'): void => {
    matches.forEach((match) => {
      if (place === 'home') {
        this._goalsFavor += match.homeTeamGoals;
        this._goalsOwn += match.awayTeamGoals;
      } else {
        this._goalsFavor += match.awayTeamGoals;
        this._goalsOwn += match.homeTeamGoals;
      }
    });
  };

  setGoalsBalance = (): void => {
    this._goalsBalance = this._goalsFavor - this._goalsOwn;
  };

  setEfficiency = (): void => {
    this._efficiency = +((this._totalPoints / (this._totalGames * 3)) * 100).toFixed(2);
  };

  getLeaderboard = (match: IMatchesCreated[], place: 'home' | 'away'): ILeaderBoard => {
    this.setResults(match, place);
    this.setTotalGames(match);
    this.setPoints();
    this.setTotalGoalsScored(match, place);
    this.setGoalsBalance();
    this.setEfficiency();

    return {
      name: this._name,
      totalPoints: this._totalPoints,
      totalGames: this._totalGames,
      totalVictories: this._totalVictories,
      totalDraws: this._totalDraws,
      totalLosses: this._totalLosses,
      goalsFavor: this._goalsFavor,
      goalsOwn: this._goalsOwn,
      goalsBalance: this._goalsBalance,
      efficiency: this._efficiency,
    };
  };
}
