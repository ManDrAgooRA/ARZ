import { goodsActions } from '@/store/actions';
import { IGoodsState } from '@/interfaces';

const initialState: IGoodsState = {
  allGoods: [],
  goods: [],
  selectedGoods: {
    id: 0,
    title: 'mok',
    image: 'mok',
    categories: 'mok',
    price: 998,
    count: 39,
    raiting: 49,
    countries: 'mok',
    isFavorite: false,
    description: 'mok',
    isSale: false,
    salePrice: 1881,
  },
  sort: 'Price',
  order: 'ASC',
  countries: [],
  categories: [],
  minPrice: 1,
  currentMaxPrice: 1000,
  maxPrice: 1500,
  isLoadCurrentGoods: true,
  isLoadGoods: true,
};

export function goods(state = initialState, action: any) {
  switch (action.type) {
    case goodsActions.FETCH_GOODS_SUCCESS:
      return {
        ...state,
        goods: [...action.payload],
        isLoadGoods: false,
      };

    case goodsActions.FETCH_ALL_GOODS_SUCCESS:
      return {
        ...state,
        allGoods: [...action.payload],
      };

    case goodsActions.FETCH_CURRENT_GOODS_SUCCESS:
      return {
        ...state,
        selectedGoods: action.payload,
        isLoadCurrentGoods: false,
      };

    case goodsActions.CLEAR_CURRENT_GOODS:
      return {
        ...state,
        selectedGoods: null,
        isLoadCurrentGoods: true,
      };

    case goodsActions.SET_SORT_STRING:
      return {
        ...state,
        sort: action.payload.split(' ')[0].toLowerCase(),
        order: action.payload.split(' ')[1],
      };

    case goodsActions.SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case goodsActions.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case goodsActions.SET_MIN_PRICE:
      return {
        ...state,
        minPrice: action.payload,
      };

    case goodsActions.SET_CURRENT_MAX_PRICE:
      return {
        ...state,
        currentMaxPrice: action.payload,
      };

    case goodsActions.SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
      };
    default:
      return state;
  }
}
