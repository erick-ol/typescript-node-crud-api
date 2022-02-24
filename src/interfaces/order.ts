interface SimpleOrder {
  userId: number
}

export interface Order extends SimpleOrder {
  products: Array<number>;
}

export interface OrderProduct extends SimpleOrder {
  id: number;
  product: number;
}

export interface ReturnGetById extends SimpleOrder {
  id: number;
  products: Array<number>;
}
