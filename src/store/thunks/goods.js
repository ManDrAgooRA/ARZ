import {
  fetchGoodsSuccess,
  fetchAllGoodSuccess,
  fetchCurrentGoodsSuccess,
} from '../actions/goodsActions';
import { getGoods, getData, selectedGoods } from '../../BusinessLogic';

export const fetchGoods = ({
  limit,
  page,
  sortBy,
  countries,
  categories,
  minPrice,
  maxPrice,
}) => {
  return async (dispatch) => {
    try {
      const goodsParse = await getGoods({
        limit,
        page,
        sortBy,
        countries,
        categories,
        minPrice,
        maxPrice,
      });
      dispatch(fetchGoodsSuccess(goodsParse));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchAllGoods = () => {
  return async (dispatch) => {
    try {
      const allGoodsParse = await getData();
      dispatch(fetchAllGoodSuccess(allGoodsParse));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchCurrentGoods = (id) => {
  return async (dispatch) => {
    try {
      const response = await selectedGoods(id);
      dispatch(fetchCurrentGoodsSuccess(response[0]));
    } catch (e) {
      console.err(e);
    }
  };
};
