import { userActions } from '@/user/store/actions';
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
    case userActions.CHANGE_SIGNUP_STATUS:
      return {
        ...state,
        isLogin: action.payload,
      };

    case userActions.FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        userName: action.payload.user.userName,
        role: action.payload.user.role,
        userId: action.payload.user.id,
        userCart: [...action.payload.user.cart],
        isLogin: true,
      };

    case userActions.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        userName: action.payload.user.userName,
        role: action.payload.user.role,
        userId: action.payload.user.id,
        userCart: action.payload.user.cart ? [...action.payload.user.cart] : [],
        isLogin: true,
      };

    case userActions.ADD_GOODS: {
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

    case userActions.CHANGE_COUNT_CART:
      return {
        ...state,
        userCart: state.userCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, count: +action.payload.value }
            : item
        ),
      };

    case userActions.REMOVE_FROM_CART:
      return {
        ...state,
        userCart: state.userCart.filter((item) => item.id !== action.payload),
      };

    case userActions.CLEAR_CART:
      return {
        ...state,
        userCart: [],
      };

    default:
      return state;
  }
}
