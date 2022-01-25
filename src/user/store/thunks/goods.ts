import {
  fetchGoodsSuccess,
  fetchAllGoodSuccess,
  fetchCurrentGoodsSuccess,
  changeModalState,
} from '@/user/store/actions';
import { IFetchGoods } from '@/interfaces';
import { getGoods, getData, selectedGoods } from '@/user/businessLogic';

export const fetchGoods = ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}: IFetchGoods) => {
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
      dispatch(changeModalState(true));
    }
  };
};

export const fetchAllGoods = () => {
  return async (dispatch: any) => {
    try {
      const allGoods = await getData();
      dispatch(fetchAllGoodSuccess(allGoods));
    } catch (e) {
      dispatch(changeModalState(true));
    }
  };
};

export const fetchCurrentGoods = (id: string) => {
  return async (dispatch: any) => {
    try {
      const currentGoods = await selectedGoods(id);
      dispatch(fetchCurrentGoodsSuccess(currentGoods));
    } catch (e: any) {
      dispatch(changeModalState(true));
    }
  };
};
