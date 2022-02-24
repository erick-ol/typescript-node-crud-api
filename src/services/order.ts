import { Order } from '../interfaces/order';
import orderModel from '../models/order';

const create = async (orderInfo: Order) => orderModel.create(orderInfo);
const getById = async (id: number) => {
  const order = orderModel.getById(id);
  return order;
};

export default { create, getById };
