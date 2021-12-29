import { getCurrentGoods } from '../api';
import { IGoods } from '../interfaces';

export const selectedGoods = async (id: string): Promise<IGoods> => {
  const response = await getCurrentGoods(id);
  const data = await response.json();

  return data;
};
