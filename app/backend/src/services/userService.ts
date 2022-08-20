import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { IUser, IUserLogin, IUserService, jwtPayload } from '../interfaces/userInterfaces';
import createToken from '../helpers/jwtCreate';
import User from '../database/models/User';
import userLoginValidate from '../validations/userLoginValidate';

export default class UserService implements IUserService<string | null> {
  userLogin = async ({ email, password }: IUserLogin): Promise<string | null> => {
    userLoginValidate({ email, password });

    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      const error = new Error('Incorrect email or password');
      error.name = 'unauthorized';
      throw error;
    }

    const token = createToken(user);

    return token;
  };

  userLoginAuth = async (auth: string): Promise<IUser> => {
    const { email } = jwt.decode(auth) as jwtPayload;
    const user = await User.findOne({ where: { email } });
    return user as IUser;
  };
}
