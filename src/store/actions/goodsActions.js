export const goodsActions = {
  FETCH_CURRENT_GODDS_SUCCESS: '[GOODS] fetch goods success',
  FETCH_ALL_GOODS_SUCCESS: '[GOODS] fetch all godds success',
  CLEAR_CURRENT_GOODS: '[GOODS] clear current goods',
  SET_SORT_STRING: '[GOODS] set sort string',
  SET_COUNTRIES: '[GOODS] set countries',
  SET_CATEGORIES: '[GOODS] set categories',
};

export const fetchAllGoodsSuccess = (allGoods) => ({
  type: goodsActions.FETCH_ALL_GOODS_SUCCESS,
  payload: allGoods,
});

export const fetchCurrentGoodsSuccess = (currentGoods) => ({
  type: goodsActions.FETCH_CURRENT_GODDS_SUCCESS,
  payload: currentGoods,
});

export const clearCurrentUser = () => ({
  type: goodsActions.CLEAR_CURRENT_GOODS,
});

export const setSortSting = (sortString) => ({
  type: goodsActions.SET_SORT_STRING,
  payload: sortString,
});

export const setCountries = (countries) => ({
  type: goodsActions.SET_COUNTRIES,
  payload: countries,
});

export const setCategories = (categories) => ({
  type: goodsActions.SET_CATEGORIES,
  payload: categories,
});
