import { authActions } from '@/store/actions';
import { IAuthState } from '@/interfaces';

export const initialState: IAuthState = {
  isLogin: false,
  userName: '',
  authError: '',
};

export function auth(state = initialState, action: any) {
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
        isLogin: true,
      };

    case authActions.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        userName: action.payload.user.userName,
        isLogin: true,
      };

    case authActions.SET_ERROR_MESSAGE:
      return {
        ...state,
        authError: action.payload,
      };

    default:
      return state;
  }
}
