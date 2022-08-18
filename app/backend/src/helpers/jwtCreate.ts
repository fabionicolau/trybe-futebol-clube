import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/userInterfaces';

const createToken = (user: IUser): string => {
  const jwtConfig: SignOptions = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const jwtSecret: Secret = process.env.JWT_SECRET || 'secret';

  const { id, username, role, email } = user;

  const token = jwt.sign({ id, username, role, email }, jwtSecret, jwtConfig);

  return token;
};

export default createToken;
