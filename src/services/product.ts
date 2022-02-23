import Product from '../interfaces/product';
import productModel from '../models/product';

const create = async (prodInfo: Product) => productModel.create(prodInfo);

export default { create };
