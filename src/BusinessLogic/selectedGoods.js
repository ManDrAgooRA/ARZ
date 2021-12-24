import { getCurrentGoods } from '../api';

export const selectedGoods = async (id) => {
  const response = await getCurrentGoods(id);
  const data = await response.json();

  return data;
};
