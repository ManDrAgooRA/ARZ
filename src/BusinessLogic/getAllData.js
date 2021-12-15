import { getAllData } from '../Api/get';

export const getData = async () => {
  const response = await getAllData();
  const data = await response.json();

  return data;
};
