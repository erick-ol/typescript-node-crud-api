import Product from '../interfaces/product';
import productModel from '../models/product';

const create = async (prodInfo: Product) => productModel.create(prodInfo);
const getAll = async () => productModel.getAll();

export default { create, getAll };
