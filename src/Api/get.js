import HTTPService from '../services/httpService';

export const getAllGoods = (limit, page) => {
  return HTTPService.get(`goods?_limit=${limit}&_page=${page}`);
};

export const getCurrentGoods = (id) => {
  return HTTPService.get(`goods?id=${id}`);
};
