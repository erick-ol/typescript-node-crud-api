import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import productService from '../services/product';

const { CREATED } = StatusCode;

const create = async (req: Request, res: Response) => {
  const prodInfo = req.body;
  const newproduct = await productService.create(prodInfo);

  return res.status(CREATED).json({ item: newproduct });
};

export default { create };
