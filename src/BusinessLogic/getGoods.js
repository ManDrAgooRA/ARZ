import { getAllGoods } from '../Api/get';

export const getGoods = async (limit, page, sortString) => {
  const response = await getAllGoods(limit, page, sortString);
  const data = await response.json();

  return data;
};
