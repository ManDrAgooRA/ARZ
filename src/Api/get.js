import HTTPService from '../services/httpService';
import { getQuery } from '../utils';

export const getAllGoods = ({ limit, page, sortBy, countries }) => {
  return HTTPService.get(
    `goods?${getQuery({ limit, page, sortBy, countries })}`
  );
};

export const getCurrentGoods = (id) => {
  return HTTPService.get(`goods?id=${id}`);
};
