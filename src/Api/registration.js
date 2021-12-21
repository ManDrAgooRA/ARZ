import HTTPService from '../services/httpService';

export const registation = ({ requestBody }) => {
  return HTTPService.post('register', requestBody);
};
