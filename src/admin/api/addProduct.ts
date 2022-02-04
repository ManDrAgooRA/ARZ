import { HTTPService } from '@/services/httpService';
import { IRequestBodyAdmin } from '../interfaces';

export const addProduct = ({
  requestBody,
}: IRequestBodyAdmin): Promise<Response> => {
  return HTTPService.post('goods', requestBody);
};
