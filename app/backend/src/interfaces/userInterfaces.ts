export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser extends IUserLogin {
  id?: number;
  username: string;
  role: string;
}

export interface jwtPayload {
  id: number;
  username: string;
  role: string;
  email: string;
}

export interface IUserService<T> {
  userLogin(user: IUserLogin): Promise<T>
  userLoginAuth(auth: string): Promise<IUser>
}
