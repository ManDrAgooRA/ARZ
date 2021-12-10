import HTTPService from '../services/httpService';
import { getQuery } from '../utils';

export const getAllGoods = ({ limit, page, sortBy, countries, categories }) => {
  return HTTPService.get(
    `goods?${getQuery({ limit, page, sortBy, countries, categories })}`
  );
};

export const getCurrentGoods = (id) => {
  return HTTPService.get(`goods?id=${id}`);
};
