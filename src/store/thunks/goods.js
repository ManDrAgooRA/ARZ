import {
  fetchAllGoodsSuccess,
  fetchCurrentGoodsSuccess,
} from '../actions/goodsActions';
import * as api from '../../Api';

export const fetchAllGoods = () => {
  return async (dispatch) => {
    try {
      const allGoods = await api.fetchData();
      const allGoodsParse = await allGoods.json();
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
