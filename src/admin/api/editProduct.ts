import { HTTPService } from '@/services/httpService';
import { IEditRequest } from '@/admin/interfaces';

export const editProduct = ({
  id,
  requestBody,
}: IEditRequest): Promise<Response> => {
  return HTTPService.patch(`goods/${id}`, requestBody);
};
