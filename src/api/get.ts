import { HTTPService } from '../services/httpService';
import { IGoodId, IGetQuery } from '../interfaces';
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
}: IGetQuery) => {
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

export const getCurrentGoods = (id: IGoodId) => {
  return HTTPService.get(`goods/${id}`);
};
