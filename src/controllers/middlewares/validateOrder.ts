import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import StatusCode from '../../enums/StatusCode';

const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = StatusCode;

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { products: prod } = req.body;

  const { error: prodArrayNumErr } = Joi.array().items(Joi.number()).validate(prod);
  if (prodArrayNumErr) {
    return res.status(UNPROCESSABLE_ENTITY).json({ error: 'Products must be an array of numbers' });
  }

  const { error: productsRequiredErr } = Joi.array().required().validate(prod);
  if (productsRequiredErr) {
    return res.status(BAD_REQUEST).json({ error: 'Products is required' });
  }

  const { error: productsLengthErr } = Joi.array().min(1).validate(prod);
  if (productsLengthErr) {
    return res.status(UNPROCESSABLE_ENTITY)
      .json({ error: 'Products can\'t be empty' });
  }

  next();
};

export default { create };
