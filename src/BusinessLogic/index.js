import { getAllGoods } from '../Api';

export const getGoods = async (limit, page) => {
  const { data } = await getAllGoods(limit, page);

  return data;
};
