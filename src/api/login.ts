import { IAuthData } from '../interfaces';
import { HTTPService } from '../services/httpService';

export const login = ({ requestBody }: IAuthData): Promise<Response> => {
  return HTTPService.post('login', requestBody);
};
