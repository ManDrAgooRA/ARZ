import { IAuthResponse, IGoods } from '@/interfaces';

export const authActions = {
  FETCH_SIGNUP_SUCCESS: '[AUTH] fetch signup success',
  FETCH_LOGIN_SUCCESS: '[AUTH] fetch loihn success',
  CHANGE_SIGNUP_STATUS: '[AUTH] change login status',
  ADD_GOODS: '[AUTH] add goods',
  REMOVE_FROM_CART: '[AUTH] remove from cart',
  CHANGE_COUNT_CART: '[AUTH] change count cart',
  CLEAR_CART: '[AUTH] clear cart',
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

export const addGoodsToCart = (currentGoods: IGoods) => ({
  type: authActions.ADD_GOODS,
  payload: currentGoods,
});

export const removeFromCart = (id: number) => ({
  type: authActions.REMOVE_FROM_CART,
  payload: id,
});

export const changeCountCart = (id: number, value: number) => ({
  type: authActions.CHANGE_COUNT_CART,
  payload: {
    id,
    value,
  },
});

export const clearCart = () => ({
  type: authActions.CLEAR_CART,
});
