import { Response, Request, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

dotenv.config();
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const privateKey = process.env.JWT_SECRET || 'secret' as jwt.Secret;
    jwt.verify(authorization as string, privateKey);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default authMiddleware;
