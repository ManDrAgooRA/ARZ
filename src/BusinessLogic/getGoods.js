import { getAllGoods } from '../Api/get';

export const getGoods = async ({ limit, page, sortBy }) => {
  const response = await getAllGoods({ limit, page, sortBy });
  const data = await response.json();

  return data;
};
