import {
  fetchGoodsSuccess,
  fetchAllGoodSuccess,
  fetchCurrentGoodsSuccess,
} from '@/store/actions';
import { IFetchGoods } from '@/interfaces';
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
  handleOpen,
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
      handleOpen();
    }
  };
};

export const fetchAllGoods = (handleOpen?: any) => {
  return async (dispatch: any) => {
    try {
      const allGoods = await getData();
      dispatch(fetchAllGoodSuccess(allGoods));
    } catch (e) {
      handleOpen();
    }
  };
};

export const fetchCurrentGoods = (id: string, handleOpen?: any) => {
  return async (dispatch: any) => {
    try {
      const currentGoods = await selectedGoods(id);
      dispatch(fetchCurrentGoodsSuccess(currentGoods));
    } catch (e) {
      handleOpen();
    }
  };
};
