import * as bcrypt from 'bcryptjs';
import { IUserLogin, IUserService } from '../interfaces/userInterfaces';
import createToken from '../helpers/jwtCreate';
import User from '../database/models/User';
import userLoginValidate from '../validations/userLoginValidate';

export default class UserService implements IUserService<string | null> {
  userLogin = async ({ email, password }: IUserLogin): Promise<string | null> => {
    userLoginValidate({ email, password });

    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      const error = new Error('Incorrect email or password');
      error.name = 'authenticationError';
      throw error;
    }

    const token = createToken(user);

    return token;
  };
}
