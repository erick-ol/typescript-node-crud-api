import express from 'express';
import userController from '../controllers/user';
import productController from '../controllers/product';
import orderController from '../controllers/order';
import validateUser from '../controllers/middlewares/validateUser';
import validateLogin from '../controllers/middlewares/validateLogin';
import validateProduct from '../controllers/middlewares/validateProduct';
import validateToken from '../controllers/middlewares/validateToken';
import validateOrder from '../controllers/middlewares/validateOrder';

const user = express.Router();
const login = express.Router();
const product = express.Router();
const order = express.Router();

user.post(
  '/',
  validateUser.username,
  validateUser.classe,
  validateUser.level,
  validateUser.password,
  userController.create,
);

login.post(
  '/',
  validateLogin.username,
  validateLogin.password,
  userController.login,
);

product.post(
  '/',
  validateToken,
  validateProduct.name,
  validateProduct.amount,
  productController.create,
);
product.get(
  '/',
  validateToken,
  productController.getAll,
);

order.post(
  '/',
  validateToken,
  validateOrder,
  orderController.create,
);

export default { user, login, product, order };
