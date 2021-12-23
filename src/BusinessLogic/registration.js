import { registation } from '../Api/registration';

export const getRegistrationData = async ({ requestBody }) => {
  try {
    const response = await registation({ requestBody });
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    return data;
  } catch (err) {
    throw Error(err);
  }
};
