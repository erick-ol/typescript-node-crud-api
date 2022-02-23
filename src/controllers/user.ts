import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import userService from '../services/user';

const { OK, CREATED, UNAUTHORIZED } = StatusCode;

const create = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const newUserToken = await userService.create(userInfo);
  return res.status(CREATED).json({ token: newUserToken });
};

const login = async (req: Request, res: Response) => {
  const loginInfo = req.body;
  const loginToken = await userService.login(loginInfo);
  if (!loginToken) {
    return res.status(UNAUTHORIZED).json({ error: 'Username or password invalid' });
  }
  return res.status(OK).json({ token: loginToken });
};

export default { create, login };
