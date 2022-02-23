import { ResultSetHeader } from 'mysql2';
import Login from '../interfaces/login';
import User from '../interfaces/user';
import connection from './connection';

interface UserReturn {
  id: number;
  username: string;
}

const create = async (userInfo: User): Promise<UserReturn> => {
  const { username, classe, level, password } = userInfo;
  const [{ insertId: id }] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
    [username, classe, level, password],
  );

  return {
    id,
    username,
  };
};

const exists = async (loginInfo: Login): Promise<UserReturn> => {
  const { username, password } = loginInfo;

  const [result] = await connection.query<ResultSetHeader>(
    'SELECT id, username FROM Trybesmith.Users WHERE username = ? AND password = ?;',
    [username, password],
  );

  const [user] = result as unknown as UserReturn[];

  return user;
};

export default { create, exists };
