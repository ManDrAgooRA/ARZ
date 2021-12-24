import { getAllGoods } from '../api';

export const getGoods = async ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}) => {
  const response = await getAllGoods({
    limit,
    page,
    sort,
    order,
    countries,
    categories,
    minPrice,
    currentMaxPrice,
  });
  const data = await response.json();
  return data;
};
