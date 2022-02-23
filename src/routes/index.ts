import express from 'express';
import userController from '../controllers/user';
import validateUser from '../controllers/middlewares/validateUser';
import validateLogin from '../controllers/middlewares/validateLogin';

const user = express.Router();
const login = express.Router();

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

export default { user, login };
