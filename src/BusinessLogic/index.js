import { fetchData } from '../Api/get';

export const getGoods = async () => {
  const fetchGoods = await fetchData();
  const parseGoods = await fetchGoods.json();

  return parseGoods;
};
