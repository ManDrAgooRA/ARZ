import { getAllGoods } from '@/api';
import { IAllGoods, IGoods } from '@/interfaces';

export const getGoods = async ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}: IAllGoods): Promise<IGoods[]> => {
  try {
    const response = await getAllGoods({
      limit,
      page,
      sort,
      order,
      countries,
      categories,
      minPrice,
      currentMaxPrice,
    });
    const data = await response.json();
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
