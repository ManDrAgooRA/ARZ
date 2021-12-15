export const allGoodsSelector = (state) => state.goods.allGoods;
export const goodsSelector = (state) => state.goods.goods;
export const goodsMaxSearchPriceSelector = (state) =>
  state.goods.maxSearchPrice;
export const selectedGoodsSelector = (state) => state.goods.selectedGoods;
export const isLoadCurrentGoodsSelector = (state) =>
  state.goods.isLoadCurrentGoods;
export const isLoadGoodsSelector = (state) => state.goods.isLoadGoods;
export const goodsSortSelector = (state) => state.goods.sort;
export const goodsOrderSelector = (state) => state.goods.order;
export const goodsMinPriceSelector = (state) => state.goods.minPrice;
export const goodsMaxPriceSelector = (state) => state.goods.maxPrice;
export const goodsCountriesSelector = (state) => state.goods.countries;
export const goodsCategoriesSelector = (state) => state.goods.categories;
export const goodsCurrentMaxPriceSelector = (state) =>
  state.goods.currentMaxPrice;
