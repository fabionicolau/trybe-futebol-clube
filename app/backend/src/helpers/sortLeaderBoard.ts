import { ILeaderBoard } from '../interfaces/leaderBoardInterface';

const sortLeaderBoard = (board: ILeaderBoard[]) => {
  const sorted = board.sort((a, b) => {
    if (b.totalPoints > a.totalPoints) return 1;
    if (b.totalPoints < a.totalPoints) return -1;

    if (b.totalVictories > a.totalVictories) return 1;
    if (b.totalVictories < a.totalVictories) return -1;

    if (b.goalsBalance > a.goalsBalance) return 1;
    if (b.goalsBalance < a.goalsBalance) return -1;

    if (b.goalsFavor > a.goalsFavor) return 1;
    if (b.goalsFavor < a.goalsFavor) return -1;

    if (b.goalsOwn > a.goalsOwn) return 1;
    if (b.goalsOwn < a.goalsOwn) return -1;

    return 0;
  });
  return sorted;
};

export default sortLeaderBoard;
