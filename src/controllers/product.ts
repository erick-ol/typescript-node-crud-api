import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import productService from '../services/product';

const { OK, CREATED } = StatusCode;

const create = async (req: Request, res: Response) => {
  const prodInfo = req.body;
  const newproduct = await productService.create(prodInfo);

  return res.status(CREATED).json({ item: newproduct });
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  
  return res.status(OK).json(products);
};

export default { create, getAll };
