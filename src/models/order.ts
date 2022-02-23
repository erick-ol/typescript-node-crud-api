import { ResultSetHeader } from 'mysql2';
import Order from '../interfaces/order';
import connection from './connection';

const create = async (orderInfo: Order) => {
  const { userId, products } = orderInfo;

  const [{ insertId: orderId }] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?);',
    [userId],
  );

  const orderProducts = products.map(async (prodId) => {
    await connection.query<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;',
      [orderId, prodId],
    );
  });
  await Promise.all(orderProducts);
};

export default { create };
