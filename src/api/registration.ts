import { IAuthData } from '../interfaces';
import { HTTPService } from '../services/httpService';

export const registation = ({ requestBody }: IAuthData): Promise<Response> => {
  return HTTPService.post('register', requestBody);
};
