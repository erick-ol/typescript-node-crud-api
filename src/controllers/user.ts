import { Request, Response } from 'express';
import userService from '../services/user';

const create = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const newUserToken = await userService.create(userInfo);
  return res.status(201).json({ token: newUserToken });
};

export default { create };
