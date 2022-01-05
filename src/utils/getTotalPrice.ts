import { IGoods } from '../interfaces';

export const getTotalPrice = (obj: IGoods[]): number => {
  let count = 0;
  const totalPrice = Object.values(obj).reduce((num, item) => {
    count += item.price * item.count;
    return count;
  }, 0);

  return totalPrice;
};
