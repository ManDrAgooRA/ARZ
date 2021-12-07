import {
  fetchAllGoodsSuccess,
  fetchCurrentGoodsSuccess,
} from '../actions/goodsActions';
import { getGoods } from '../../BusinessLogic';
import * as api from '../../Api';

export const fetchAllGoods = (limit, page) => {
  return async (dispatch) => {
    try {
      const allGoodsParse = await getGoods(limit, page);
      dispatch(fetchAllGoodsSuccess(allGoodsParse));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchCurrentGoods = (id) => {
  return async (dispatch) => {
    try {
      const selectedGoods = await api.fetchCurrentGoods(id);
      const goodsParsed = await selectedGoods.json();
      dispatch(fetchCurrentGoodsSuccess(goodsParsed[0]));
    } catch (e) {
      console.err(e);
    }
  };
};
