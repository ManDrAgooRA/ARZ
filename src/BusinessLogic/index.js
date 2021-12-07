import { getAllGoods } from '../Api/get';

export const getGoods = async (limit, page) => {
  const response = await getAllGoods(limit, page);
  const data = await response.json();

  return data;
};
