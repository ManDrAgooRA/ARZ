import { getAllGoods } from '../Api/get';

export const getGoods = async ({
  limit,
  page,
  sortBy,
  countries,
  categories,
  minPrice,
  maxPrice,
}) => {
  const response = await getAllGoods({
    limit,
    page,
    sortBy,
    countries,
    categories,
    minPrice,
    maxPrice,
  });
  const data = await response.json();

  return data;
};
