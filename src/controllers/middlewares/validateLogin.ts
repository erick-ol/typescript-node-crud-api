import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import StatusCode from '../../enums/StatusCode';

const { BAD_REQUEST } = StatusCode;

const username = async (req: Request, res: Response, next: NextFunction) => {
  const { username: user } = req.body;

  const { error: usernameRequiredErr } = Joi.string().required().validate(user);
  if (usernameRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Username is required' });
  }

  next();
};

const password = async (req: Request, res: Response, next: NextFunction) => {
  const { password: passwd } = req.body;

  const { error: passwordRequiredErr } = Joi.string().required().validate(passwd);
  if (passwordRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Password is required' });
  }

  next();
};

export default { username, password };
