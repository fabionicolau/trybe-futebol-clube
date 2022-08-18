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

export { newUserController, newTeamController, newMatchesController };
