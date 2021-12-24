import { login } from '../api';

export const getLogin = async ({ requestBody }) => {
  try {
    const response = await login({ requestBody });
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);

    return data;
  } catch (err) {
    throw Error(err);
  }
};
