import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import StatusCode from '../../enums/StatusCode';
import JwtUser from '../../interfaces/jwt';
import Jwt from '../../utils/jwt';

const { UNAUTHORIZED } = StatusCode;

export default async (req: Request, res: Response, next: NextFunction) => {
  const auth: string = req.headers.authorization || '';

  const { error: authRequiredErr } = Joi.string().required().validate(auth);
  if (authRequiredErr) {
    return res.status(UNAUTHORIZED).json({ error: 'Token not found' });
  }

  try {
    const userInfo = Jwt.verify(auth);
    const user = userInfo as JwtUser;

    req.body.userId = user.id;
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ error: 'Invalid token' });
  }

  next();
};

// Error authorization ts 'string | undefined' to 'string'
// https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string

// Pass a variable through 'next' function
// https://www.geeksforgeeks.org/how-to-pass-variables-to-the-next-middleware-using-next-in-express-js/