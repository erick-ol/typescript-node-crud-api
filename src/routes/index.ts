import express from 'express';
import userController from '../controllers/user';
import validateUser from '../controllers/middlewares/validateUser';

const user = express.Router();

user.post(
  '/',
  validateUser.username,
  validateUser.classe,
  validateUser.level,
  validateUser.password,
  userController.create,
);

export default { user };
