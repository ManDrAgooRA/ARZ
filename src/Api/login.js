import { HTTPService } from '../services/httpService';

export const login = ({ requestBody }) => {
  return HTTPService.post('login', requestBody);
};
