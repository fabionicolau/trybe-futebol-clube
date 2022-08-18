import UserService from '../services/userService';
import UserController from '../controllers/userController';

const newService = new UserService();
const newController = new UserController(newService);
export default newController;
