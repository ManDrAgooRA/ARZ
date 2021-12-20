export const authActions = {
  FETCH_LOGIN_SUCCESS: '[AUTH] fetch login success',
  CHANGE_LOGIN_STATUS: '[AUTH] change login status',
};

export const changeLoginStatus = (loginstatus) => ({
  type: authActions.CHANGE_LOGIN_STATUS,
  payload: loginstatus,
});

export const fetchLoginSuccess = (user) => ({
  type: authActions.FETCH_LOGIN_SUCCESS,
  payload: user,
});
