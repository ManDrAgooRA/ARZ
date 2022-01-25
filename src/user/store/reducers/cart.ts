import { cartAction } from '@/user/store/actions';
import { ICartState } from '@/interfaces';

const initialState: ICartState = {
  cart: [],
};

export function cart(state = initialState, action: any) {
  switch (action.type) {
    case cartAction.ADD_GOODS: {
      const inCart = state.cart.find((item) => item.id === action.payload.id);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, count: 1 }],
      };
    }

    case cartAction.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case cartAction.CHANGE_COUNT_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: +action.payload.value }
            : item
        ),
      };
    default:
      return state;
  }
}
