import { ResultSetHeader } from 'mysql2';
import Product from '../interfaces/product';
import connection from './connection';

interface ProductReturn {
  id: number;
  name: string;
  amount: string;
}

const create = async (prodInfo: Product): Promise<ProductReturn> => {
  const { name, amount } = prodInfo;
  const [{ insertId: id }] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);',
    [name, amount],
  );

  return {
    id,
    name,
    amount,
  };
};

export default { create };
