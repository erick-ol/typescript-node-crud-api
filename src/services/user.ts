import User from '../interfaces/user';
import userModel from '../models/user';
import jwt from '../utils/jwt';

const create = async (userInfo: User) => {
  const user = await userModel.create(userInfo);
  const token = jwt.sign(user);
  return token;
};

export default { create };
