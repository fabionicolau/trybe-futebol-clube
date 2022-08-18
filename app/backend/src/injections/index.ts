import UserService from '../services/userService';
import UserController from '../controllers/userController';
import TeamsController from '../controllers/teamsController';
import TeamsService from '../services/teamsService';

// userInjection
const newUserService = new UserService();
const newUserController = new UserController(newUserService);

// teamsInjection
const newTeamService = new TeamsService();
const newTeamController = new TeamsController(newTeamService);

export { newUserController, newTeamController };
