import {
  fetchAllGoodsSuccess,
  fetchCurrentGoodsSuccess,
} from '../actions/goodsActions';
import { getGoods, selectedGoods } from '../../BusinessLogic';

export const fetchAllGoods = ({
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
      const allGoodsParse = await getGoods({
        limit,
        page,
        sortBy,
        countries,
        categories,
        minPrice,
        maxPrice,
      });
      dispatch(fetchAllGoodsSuccess(allGoodsParse));
    } catch (e) {
      console.error(e);
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
