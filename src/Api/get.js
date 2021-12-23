import { HTTPService } from '../services/httpService';
import { getQuery } from '../utils';

export const getAllGoods = ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}) => {
  return HTTPService.get(
    `goods?${getQuery({
      limit,
      page,
      sort,
      order,
      countries,
      categories,
      minPrice,
      currentMaxPrice,
    })}`
  );
};

export const getAllData = () => {
  return HTTPService.get('goods');
};

export const getCurrentGoods = (id) => {
  return HTTPService.get(`goods/${id}`);
};
