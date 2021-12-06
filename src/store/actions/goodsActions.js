export const goodsActions = {
  FETCH_CURRENT_GODDS_SUCCESS: '[GOODS] fetch goods success',
  CLEAR_CURRENT_GOODS: '[GOODS] clear current goods',
};

export const fetchCurrentGoodsSuccess = (currentGoods) => ({
  type: goodsActions.FETCH_CURRENT_GODDS_SUCCESS,
  payload: currentGoods,
});

export const clearCurrentUser = () => ({
  type: goodsActions.CLEAR_CURRENT_GOODS,
});
