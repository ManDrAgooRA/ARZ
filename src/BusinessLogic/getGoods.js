import { getAllGoods } from '../Api/get';

export const getGoods = async ({
  limit,
  page,
  sortBy,
  countries,
  categories,
}) => {
  const response = await getAllGoods({
    limit,
    page,
    sortBy,
    countries,
    categories,
  });
  const data = await response.json();

  return data;
};
