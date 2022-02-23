import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import StatusCode from '../../enums/StatusCode';

const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = StatusCode;

const name = async (req: Request, res: Response, next: NextFunction) => {
  const { name: prodName } = req.body;

  const { error: nameStringErr } = Joi.string().validate(prodName);
  if (nameStringErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Name must be a string' });
  }

  const { error: nameRequiredErr } = Joi.string().required().validate(prodName);
  if (nameRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Name is required' });
  }

  const { error: nameLengthErr } = Joi.string().min(3).validate(prodName);
  if (nameLengthErr) {
    return res.status(UNPROCESSABLE_ENTITY)
      .json({ error: 'Name must be longer than 2 characters' });
  }

  next();
};

const amount = async (req: Request, res: Response, next: NextFunction) => {
  const { amount: prodAmount } = req.body;

  const { error: amountStringErr } = Joi.string().validate(prodAmount);
  if (amountStringErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Amount must be a string' });
  }

  const { error: amountRequiredErr } = Joi.string().required().validate(prodAmount);
  if (amountRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Amount is required' });
  }

  const { error: amountLengthErr } = Joi.string().min(3).validate(prodAmount);
  if (amountLengthErr) {
    return res.status(UNPROCESSABLE_ENTITY)
      .json({ error: 'Amount must be longer than 2 characters' });
  }

  next();
};

export default { name, amount };
