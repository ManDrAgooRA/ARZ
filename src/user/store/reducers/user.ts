import { authActions } from '@/user/store/actions';
import { IAuthState } from '@/interfaces';

export const initialState: IAuthState = {
  isLogin: false,
  userId: '',
  userCart: [],
  userName: '',
  role: '',
};

export function user(state = initialState, action: any) {
  switch (action.type) {
    case authActions.CHANGE_SIGNUP_STATUS:
      return {
        ...state,
        isLogin: action.payload,
      };

    case authActions.FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        userName: action.payload.user.userName,
        role: action.payload.user.role,
        userId: action.payload.user.id,
        userCart: [...action.payload.user.cart],
        isLogin: true,
      };

    case authActions.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        userName: action.payload.user.userName,
        role: action.payload.user.role,
        userId: action.payload.user.id,
        userCart: action.payload.user.cart ? [...action.payload.user.cart] : [],
        isLogin: true,
      };

    case authActions.ADD_GOODS: {
      const inCart = state.userCart.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        userCart: inCart
          ? state.userCart.map((item) =>
              item.id === action.payload.id
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...state.userCart, { ...action.payload, count: 1 }],
      };
    }

    case authActions.CHANGE_COUNT_CART:
      return {
        ...state,
        userCart: state.userCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: +action.payload.value }
            : item
        ),
      };

    case authActions.REMOVE_FROM_CART:
      return {
        ...state,
        userCart: state.userCart.filter((item) => item.id !== action.payload),
      };

    case authActions.CLEAR_CART:
      return {
        ...state,
        userCart: [],
      };

    default:
      return state;
  }
}
