import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import StatusCode from '../../enums/StatusCode';
import Jwt from '../../utils/jwt';

const { UNAUTHORIZED } = StatusCode;

export default async (req: Request, res: Response, next: NextFunction) => {
  const auth: string = req.headers.authorization || '';

  const { error: authRequiredErr } = Joi.string().required().validate(auth);
  if (authRequiredErr) {
    return res.status(UNAUTHORIZED).json({ error: 'Token not found' });
  }

  try {
    Jwt.verify(auth);
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ error: 'Invalid token' });
  }

  next();
};

// Error authorization ts 'string | undefined' to 'string'
// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
