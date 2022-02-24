import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import { Order, ReturnGetById } from '../interfaces/order';
import orderService from '../services/order';

const { CREATED, NOT_FOUND, OK } = StatusCode;

const create = async (req: Request, res: Response) => {
  const orderInfo: Order = req.body;
  await orderService.create(orderInfo);
  const { userId, products } = orderInfo;

  return res.status(CREATED).json({ order: { userId, products } });
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orderId: number = +id;
  const order = await orderService.getById(orderId);

  if (order.length === 0) return res.status(NOT_FOUND).json({ error: 'Order not found' });

  const orderReturn: ReturnGetById = { id: order[0].id, userId: order[0].userId, products: [] };
  order.forEach((item: { product: number; }) => {
    orderReturn.products = [...orderReturn.products, item.product];
  });

  return res.status(OK).json(orderReturn);
};

export default { create, getById };

// Transform string request to number
// https://stackoverflow.com/questions/14667713/how-to-convert-a-string-to-number-in-typescript
