import { auth } from '../Api/auth';

export const signUp = async ({ requestBody }) => {
  const response = await auth({ requestBody });
  const data = await response.json();
  localStorage.setItem('token', data.accessToken);

  return data;
};
