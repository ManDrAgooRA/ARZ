import { registation } from '@/api';
import { IAuthData, IAuthResponse } from '@/interfaces';

export const getRegistrationData = async ({
  requestBody,
}: IAuthData): Promise<IAuthResponse> => {
  try {
    const response = await registation({ requestBody });
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);

    return data;
  } catch (err: any) {
    throw Error(err);
  }
};
