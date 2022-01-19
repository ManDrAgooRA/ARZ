import { IAuthResponse } from '@/interfaces';

export const authActions = {
  FETCH_SIGNUP_SUCCESS: '[AUTH] fetch signup success',
  FETCH_LOGIN_SUCCESS: '[AUTH] fetch loihn success',
  CHANGE_SIGNUP_STATUS: '[AUTH] change login status',
};

export const changeSinUpStatus = (loginstatus: boolean) => ({
  type: authActions.CHANGE_SIGNUP_STATUS,
  payload: loginstatus,
});

export const fetchSinUpSuccess = (user: IAuthResponse) => ({
  type: authActions.FETCH_SIGNUP_SUCCESS,
  payload: user,
});

export const fetchLoginSuccess = (user: IAuthResponse) => ({
  type: authActions.FETCH_LOGIN_SUCCESS,
  payload: user,
});
