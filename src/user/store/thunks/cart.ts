import { changeModalState, addGoodsToCartSuccess } from '@/user/store/actions';
import { changeUserCart } from '@/api/changeUserCart';
import { IAddToCart } from '@/interfaces';

export const addToCart = ({ id, item, cart }: IAddToCart) => {
  const newCartValue = {
    cart: [...cart, item],
  };
  return async (dispatch: any) => {
    try {
      dispatch(addGoodsToCartSuccess(item));
      changeUserCart({ id, requestBody: newCartValue });
    } catch (e) {
      dispatch(changeModalState(true));
    }
  };
};
