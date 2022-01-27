import { IAuthResponse, IGoods } from '@/interfaces';

export const userActions = {
  FETCH_SIGNUP_SUCCESS: '[AUTH] fetch signup success',
  FETCH_LOGIN_SUCCESS: '[AUTH] fetch loihn success',
  CHANGE_SIGNUP_STATUS: '[AUTH] change login status',
  ADD_GOODS: '[AUTH] add goods',
  REMOVE_FROM_CART: '[AUTH] remove from cart',
  CHANGE_COUNT_CART: '[AUTH] change count cart',
  CLEAR_CART: '[AUTH] clear cart',
};

export const changeSinUpStatus = (loginstatus: boolean) => ({
  type: userActions.CHANGE_SIGNUP_STATUS,
  payload: loginstatus,
});

export const fetchSinUpSuccess = (user: IAuthResponse) => ({
  type: userActions.FETCH_SIGNUP_SUCCESS,
  payload: user,
});

export const fetchLoginSuccess = (user: IAuthResponse) => ({
  type: userActions.FETCH_LOGIN_SUCCESS,
  payload: user,
});

export const addGoodsToCart = (currentGoods: IGoods) => ({
  type: userActions.ADD_GOODS,
  payload: currentGoods,
});

export const removeFromCart = (id: number) => ({
  type: userActions.REMOVE_FROM_CART,
  payload: id,
});

export const changeCountCart = (id: number, value: number) => ({
  type: userActions.CHANGE_COUNT_CART,
  payload: {
    id,
    value,
  },
});

export const clearCart = () => ({
  type: userActions.CLEAR_CART,
});
