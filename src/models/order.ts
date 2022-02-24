import { ResultSetHeader } from 'mysql2';
import { Order, OrderProduct } from '../interfaces/order';
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

const getById = async (id: number): Promise<OrderProduct[]> => {
  const [result] = await connection.query<ResultSetHeader>(
    `SELECT DISTINCT o.id, o.userId, p.id product
    FROM Trybesmith.Orders o
    JOIN Trybesmith.Products p
    ON o.id = p.orderId
    WHERE o.id = ?;`,
    [id],
  );

  const rows = result as unknown as Array<OrderProduct>;

  return rows;
};

export default { create, getById };
