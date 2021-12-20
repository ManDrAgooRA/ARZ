import HTTPService from '../services/httpService';

export const auth = ({ requestBody }) => {
  return HTTPService.post('register', requestBody);
};
