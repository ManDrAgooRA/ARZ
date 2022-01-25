import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaymentModal } from '@/user/components/PaymentModal/PaymentModal';
import { CartItem } from '@/user/components/CartItem/CartItem';
import { cartGoodsSelector } from '@/user/store/selectors';
import { getTotalPrice } from '@/utils';
import { IGoods } from '@/interfaces';
import './cart.scss';

export const Cart: FC = () => {
  const cartGoods = useSelector(cartGoodsSelector);
  const [isPaymentModal, setIsOpenPaymentModal] = useState(false);

  const handleOpen = () => {
    setIsOpenPaymentModal(true);
  };

  const handleClose = () => {
    setIsOpenPaymentModal(false);
  };

  return (
    <div className="wrapper">
      <PaymentModal paymentModal={isPaymentModal} handleClose={handleClose} />
      {cartGoods.map((item: IGoods) => {
        return <CartItem key={item.id} item={item} />;
      })}
      <div className="cart-total">
        <button
          type="button"
          className="btn btn-cart"
          disabled={cartGoods.length <= 0}
          onClick={handleOpen}
        >
          Buy
        </button>
        <span>Total: {getTotalPrice(cartGoods)}₴</span>
      </div>
    </div>
  );
};
