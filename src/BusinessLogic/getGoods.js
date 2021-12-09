import { getAllGoods } from '../Api/get';

export const getGoods = async ({ limit, page, sortBy, countries }) => {
  const response = await getAllGoods({ limit, page, sortBy, countries });
  const data = await response.json();

  return data;
};
