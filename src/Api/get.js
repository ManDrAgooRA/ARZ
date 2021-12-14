import HTTPService from '../services/httpService';
import { getQuery } from '../utils';

export const getAllGoods = ({
  limit,
  page,
  sortBy,
  countries,
  categories,
  minPrice,
  maxPrice,
}) => {
  return HTTPService.get(
    `goods?${getQuery({
      limit,
      page,
      sortBy,
      countries,
      categories,
      minPrice,
      maxPrice,
    })}`
  );
};

export const getAllData = () => {
  return HTTPService.get('goods');
};

export const getCurrentGoods = (id) => {
  return HTTPService.get(`goods?id=${id}`);
};
