import { HTTPService } from '@/services/httpService';
import { IEditUserRequest } from '@/admin/interfaces';

export const editUserApi = ({
  id,
  requestBody,
}: IEditUserRequest): Promise<Response> => {
  return HTTPService.patch(`users/${id}`, requestBody);
};
