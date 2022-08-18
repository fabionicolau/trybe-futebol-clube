import { Request, Response } from 'express';
import errorHandler from '../middlewares/errorHandler';
import { IUserService } from '../interfaces/userInterfaces';

export default class UserController {
  constructor(private userService: IUserService<string | null>) { }

  userLogin = async (req: Request, res: Response): Promise<void | string> => {
    try {
      const { email, password } = req.body;
      const token = await this.userService.userLogin({ email, password });

      res.status(200).json({ token });
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };

  userLoginAuth = async (req: Request, res: Response): Promise<void> => {
    try {
      const { authorization } = req.headers;
      const user = await this.userService.userLoginAuth(authorization as string);

      res.status(200).json({ role: user.role });
    } catch (error) {
      errorHandler(error as Error, req, res);
    }
  };
}
