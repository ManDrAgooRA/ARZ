import {
  fetchGoodsSuccess,
  fetchAllGoodSuccess,
  fetchCurrentGoodsSuccess,
} from '../actions/goodsActions';
import { getGoods, getData, selectedGoods } from '../../BusinessLogic';

export const fetchGoods = ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}) => {
  return async (dispatch) => {
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
      console.error(e);
    }
  };
};

export const fetchAllGoods = () => {
  return async (dispatch) => {
    try {
      const allGoods = await getData();
      dispatch(fetchAllGoodSuccess(allGoods));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchCurrentGoods = (id) => {
  return async (dispatch) => {
    try {
      const currentGoods = await selectedGoods(id);
      dispatch(fetchCurrentGoodsSuccess(currentGoods[0]));
    } catch (e) {
      console.err(e);
    }
  };
};
