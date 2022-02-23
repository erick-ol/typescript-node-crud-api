import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/user';
import connection from './connection';

interface Create {
  id: number;
  username: string;
}

const create = async (userInfo: User): Promise<Create> => {
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

export default { create };
