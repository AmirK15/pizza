import { CartItem } from '../redux/cart/types';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, rec) => acc + rec.price * rec.count, 0);
};
