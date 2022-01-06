import {
  fetchGoodsSuccess,
  fetchAllGoodSuccess,
  fetchCurrentGoodsSuccess,
} from '@/store/actions';
import { IAllGoods } from '@/interfaces';
import { getGoods, getData, selectedGoods } from '@/BusinessLogic';

export const fetchGoods = ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}: IAllGoods) => {
  return async (dispatch: any) => {
    try {
      const goods = await getGoods({
        limit,
        page,
        sort,
        order,
        countries,
        categories,
        minPrice,
        currentMaxPrice,
      });
      dispatch(fetchGoodsSuccess(goods));
    } catch (e) {
      throw Error(e);
    }
  };
};

export const fetchAllGoods = () => {
  return async (dispatch: any) => {
    try {
      const allGoods = await getData();
      dispatch(fetchAllGoodSuccess(allGoods));
    } catch (e) {
      throw Error(e);
    }
  };
};

export const fetchCurrentGoods = (id: string) => {
  return async (dispatch: any) => {
    try {
      const currentGoods = await selectedGoods(id);
      dispatch(fetchCurrentGoodsSuccess(currentGoods));
    } catch (e) {
      throw Error(e);
    }
  };
};
