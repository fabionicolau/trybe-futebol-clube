import UserService from '../services/userService';
import UserController from '../controllers/userController';
import TeamsController from '../controllers/teamsController';
import TeamsService from '../services/teamsService';

// userInjection
const newService = new UserService();
const newController = new UserController(newService);

// teamsInjection
const newTeamService = new TeamsService();
const newTeamController = new TeamsController(newTeamService);

export { newController, newTeamController };
