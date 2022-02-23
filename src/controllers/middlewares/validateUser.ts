import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import StatusCode from '../../enums/StatusCode';

const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = StatusCode;

const username = async (req: Request, res: Response, next: NextFunction) => {
  const { username: user } = req.body;

  const { error: usernameStringErr } = Joi.string().validate(user);
  if (usernameStringErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Username must be a string' });
  }

  const { error: usernameRequiredErr } = Joi.string().required().validate(user);
  if (usernameRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Username is required' });
  }

  const { error: usernameLengthErr } = Joi.string().min(3).validate(user);
  if (usernameLengthErr) {
    return res.status(UNPROCESSABLE_ENTITY)
      .json({ error: 'Username must be longer than 2 characters' });
  }

  next();
};

const classe = async (req: Request, res: Response, next: NextFunction) => {
  const { classe: cl } = req.body;

  const { error: classeStringErr } = Joi.string().validate(cl);
  if (classeStringErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Classe must be a string' });
  }

  const { error: classeRequiredErr } = Joi.string().required().validate(cl);
  if (classeRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Classe is required' });
  }

  const { error: classeLengthErr } = Joi.string().min(3).validate(cl);
  if (classeLengthErr) {
    return res.status(UNPROCESSABLE_ENTITY)
      .json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
};

const level = async (req: Request, res: Response, next: NextFunction) => {
  const { level: lev } = req.body;

  const { error: levelNumberErr } = Joi.number().strict().validate(lev);
  if (levelNumberErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Level must be a number' });
  }

  const { error: levelRequiredErr } = Joi.number().required().validate(lev);
  if (levelRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Level is required' });
  }

  const { error: levelLengthErr } = Joi.number().greater(0).validate(lev);
  if (levelLengthErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Level must be greater than 0' });
  }

  next();
};

const password = async (req: Request, res: Response, next: NextFunction) => {
  const { password: passwd } = req.body;

  const { error: passwordStringErr } = Joi.string().validate(passwd);
  if (passwordStringErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Password must be a string' });
  }

  const { error: passwordRequiredErr } = Joi.string().required().validate(passwd);
  if (passwordRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Password is required' });
  }

  const { error: passwordLengthErr } = Joi.string().min(8).validate(passwd);
  if (passwordLengthErr) {
    return res.status(UNPROCESSABLE_ENTITY)
      .json({ error: 'Password must be longer than 7 characters' });
  }

  next();
};

export default { username, classe, level, password };

// Strict number
// https://github.com/sideway/joi/issues/1575
