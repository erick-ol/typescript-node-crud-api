import Order from '../interfaces/order';
import orderModel from '../models/order';

const create = async (orderInfo: Order) => orderModel.create(orderInfo);

export default { create };
