import { goodsActions } from '../actions';

export const initialState = {
  allGoods: [],
  goods: [],
  selectedGoods: {
    id: 358,
    title: 'Sleek Wooden Car',
    image: 'http://placeimg.com/640/480/nature',
    category: [
      {
        id: 12,
      },
    ],
    price: '998.00',
    count: 39,
    raiting: 49,
    country: 'Senegal',
    ifFavorite: false,
    specification: [
      {
        title: 'phone',
        brend: 'samsung',
      },
    ],
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and',
    isSale: false,
    salePrice: 1881,
  },
  sortBy: 'Price ASC',
  countries: [],
  categories: [],
  minPrice: 1,
  maxPrice: 1000,
  maxSearchPrice: 1000,
  isLoadCurrentGoods: true,
  isLoadGoods: true,
};

export function goods(state = initialState, action = {}) {
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

    case goodsActions.FETCH_CURRENT_GODDS_SUCCESS:
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
        sortBy: action.payload,
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

    case goodsActions.SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
      };
    default:
      return state;
  }
}
