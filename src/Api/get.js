import HTTPService from '../services/httpService';

export const getAllGoods = (limit, page, sortString) => {
  return HTTPService.get(`goods?_limit=${limit}&_page=${page}${sortString}`);
};

export const getCurrentGoods = (id) => {
  return HTTPService.get(`goods?id=${id}`);
};
