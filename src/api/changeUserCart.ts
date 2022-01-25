import { HTTPService } from '@/services/httpService';

export const changeUserCart = ({
  id,
  requestBody,
}: {
  id: string;
  requestBody: object;
}): Promise<Response> => {
  return HTTPService.patch(`users/${id}`, requestBody);
};
