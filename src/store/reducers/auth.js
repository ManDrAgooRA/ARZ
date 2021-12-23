import { authActions } from '../actions';

export const initialState = {
  isLogin: false,
  userName: '',
  authError: '',
};

export function auth(state = initialState, action = {}) {
  switch (action.type) {
    case authActions.CHANGE_SIGNUP_STATUS:
      return {
        ...state,
        isLogin: action.payload,
      };

    case authActions.FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        userName: action.payload,
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
