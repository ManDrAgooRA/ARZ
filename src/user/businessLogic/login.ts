import { login } from '@/api';
import { IAuthData, IAuthResponse } from '@/interfaces';

export const getLogin = async ({
  requestBody,
}: IAuthData): Promise<IAuthResponse> => {
  try {
    const response = await login({ requestBody });
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
