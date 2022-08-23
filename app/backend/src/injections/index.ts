import LeaderBoardController from '../controllers/leaderBoardController';
import LeaderBoardService from '../services/leaderBoardService';
import UserService from '../services/userService';
import UserController from '../controllers/userController';
import TeamsController from '../controllers/teamsController';
import TeamsService from '../services/teamsService';
import MatchesService from '../services/matchesService';
import MatchesController from '../controllers/matchesController';

// userInjection
const newUserService = new UserService();
const newUserController = new UserController(newUserService);

// teamsInjection
const newTeamService = new TeamsService();
const newTeamController = new TeamsController(newTeamService);

// matchesInjection
const newMatchesService = new MatchesService();
const newMatchesController = new MatchesController(newMatchesService);

// leaderBoardInjectionn;
const newLeaderBoardService = new LeaderBoardService();
const newLeaderBoardController = new LeaderBoardController(newLeaderBoardService);

export { newUserController, newTeamController, newMatchesController, newLeaderBoardController };
