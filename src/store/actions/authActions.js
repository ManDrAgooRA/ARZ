export const authActions = {
  FETCH_SIGNUP_SUCCESS: '[AUTH] fetch signup success',
  FETCH_LOGIN_SUCCESS: '[AUTH] fetch loihn success',
  CHANGE_SIGNUP_STATUS: '[AUTH] change login status',
  SET_ERROR_MESSAGE: '[AUTH] set error message',
};

export const setErrorMessage = (message) => ({
  type: authActions.SET_ERROR_MESSAGE,
  payload: message,
});

export const changeSinUpStatus = (loginstatus) => ({
  type: authActions.CHANGE_SIGNUP_STATUS,
  payload: loginstatus,
});

export const fetchSinUpSuccess = (user) => ({
  type: authActions.FETCH_SIGNUP_SUCCESS,
  payload: user,
});

export const fetchLoginSuccess = (user) => ({
  type: authActions.FETCH_LOGIN_SUCCESS,
  payload: user,
});
