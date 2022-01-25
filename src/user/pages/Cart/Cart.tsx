import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PaymentModal } from '@/user/components/PaymentModal/PaymentModal';
import { CartItem } from '@/user/components/CartItem/CartItem';
import { userUserCart, userUserId } from '@/user/store/selectors';
import { getTotalPrice } from '@/utils';
import { IGoods } from '@/interfaces';
import { changeUserCart } from '@/api/changeUserCart';
import './cart.scss';

export const Cart: FC = () => {
  const userCart = useSelector(userUserCart);
  const userId = useSelector(userUserId);
  const [isPaymentModal, setIsOpenPaymentModal] = useState(false);

  const handleOpen = () => {
    setIsOpenPaymentModal(true);
  };

  const handleClose = () => {
    setIsOpenPaymentModal(false);
  };

  useEffect(() => {
    const newCartValue = {
      cart: userCart,
    };

    changeUserCart({ id: userId, requestBody: newCartValue });
  }, [userCart]);

  return (
    <div className="wrapper">
      <PaymentModal paymentModal={isPaymentModal} handleClose={handleClose} />
      {userCart.map((item: IGoods) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <div className="cart-total">
        <button
          type="button"
          className="btn btn-cart"
          disabled={userCart.length <= 0}
          onClick={handleOpen}
        >
          Buy
        </button>
        <span>Total: {getTotalPrice(userCart)}₴</span>
      </div>
    </div>
  );
};
