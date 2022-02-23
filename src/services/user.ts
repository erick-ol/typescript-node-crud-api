import Login from '../interfaces/login';
import User from '../interfaces/user';
import userModel from '../models/user';
import jwt from '../utils/jwt';

const create = async (userInfo: User) => {
  const user = await userModel.create(userInfo);
  const token = jwt.sign(user);
  return token;
};

const login = async (loginInfo: Login) => {
  const userInfo = await userModel.exists(loginInfo);
  if (userInfo === undefined) return false;
  const token = jwt.sign(userInfo);
  return token;
};

export default { create, login };
