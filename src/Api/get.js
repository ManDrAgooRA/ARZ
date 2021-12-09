import HTTPService from '../services/httpService';
import { getQuery } from '../utils';

export const getAllGoods = ({ limit, page, sortBy }) => {
  return HTTPService.get(`goods?${getQuery({ limit, page, sortBy })}`);
};

export const getCurrentGoods = (id) => {
  return HTTPService.get(`goods?id=${id}`);
};
