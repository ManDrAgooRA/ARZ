import { getAllData } from '@/api';
import { IGoods } from '@/interfaces';

export const getData = async (): Promise<IGoods[]> => {
  const response = await getAllData();
  const data = await response.json();
  return data;
};
