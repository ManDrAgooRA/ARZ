import HTTPService from '../services/httpService';

export const getAllGoods = (limit, page) => {
  return HTTPService.get(`goods?_limit=${limit}&_page=${page}`);
};

export const fetchCurrentGoods = async (id) => {
  const response = await fetch(`${process.env.API_KEY}goods?id=${id}`);
  return response;
};
