import { authActions } from '../actions';

export const initialState = {
  isLogin: false,
  userName: '',
};

export function auth(state = initialState, action = {}) {
  switch (action.type) {
    case authActions.CHANGE_LOGIN_STATUS:
      return {
        ...state,
        isLogin: action.payload,
      };
    case authActions.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        userName: action.payload,
        isLogin: true,
      };
    default:
      return state;
  }
}
