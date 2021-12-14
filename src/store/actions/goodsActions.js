export const goodsActions = {
  FETCH_CURRENT_GODDS_SUCCESS: '[GOODS] fetch goods success',
  FETCH_GOODS_SUCCESS: '[GOODS] fetch godds success',
  FETCH_ALL_GOODS_SUCCESS: '[GOODS] fetch all godds success',
  CLEAR_CURRENT_GOODS: '[GOODS] clear current goods',
  SET_SORT_STRING: '[GOODS] set sort string',
  SET_COUNTRIES: '[GOODS] set countries',
  SET_CATEGORIES: '[GOODS] set categories',
  SET_MIN_PRICE: '[GOODS] set min price',
  SET_MAX_PRICE: '[GOODS] set max price',
};

export const fetchGoodsSuccess = (goods) => ({
  type: goodsActions.FETCH_GOODS_SUCCESS,
  payload: goods,
});

export const fetchAllGoodSuccess = (goods) => ({
  type: goodsActions.FETCH_ALL_GOODS_SUCCESS,
  payload: goods,
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

export const setMinPrice = (minPrice) => ({
  type: goodsActions.SET_MIN_PRICE,
  payload: minPrice,
});

export const setMaxPrice = (maxPrice) => ({
  type: goodsActions.SET_MAX_PRICE,
  payload: maxPrice,
});
