import { IGoods } from '@/interfaces';

export const cartAction = {
  ADD_GOODS: '[CART] add goods',
  REMOVE_FROM_CART: '[CART] remove from cart',
  CHANGE_COUNT_CART: '[COUNT] change count cart',
};

export const addGoodsToCart = (currentGoods: IGoods) => ({
  type: cartAction.ADD_GOODS,
  payload: currentGoods,
});

export const removeFromCart = (id: number) => ({
  type: cartAction.REMOVE_FROM_CART,
  payload: id,
});

export const changeCountCart = (id: number, value: number) => ({
  type: cartAction.CHANGE_COUNT_CART,
  payload: {
    id,
    value,
  },
});
