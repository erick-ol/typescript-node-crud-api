import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import Order from '../interfaces/order';
import orderService from '../services/order';

const { CREATED } = StatusCode;

const create = async (req: Request, res: Response) => {
  const orderInfo: Order = req.body;
  await orderService.create(orderInfo);
  const { userId, products } = orderInfo;

  return res.status(CREATED).json({ order: { userId, products } });
};

export default { create };
