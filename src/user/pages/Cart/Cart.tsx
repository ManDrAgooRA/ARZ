import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '@/sharedComponents/Modal/Modal';
import { CartItem } from '@/user/components/CartItem/CartItem';
import { cartGoodsSelector } from '@/user/store/selectors';
import { getTotalPrice } from '@/utils';
import { IGoods } from '@/interfaces';
import './cart.scss';

export const Cart: FC = () => {
  const cartGoods = useSelector(cartGoodsSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="wrapper">
      <Modal
        isOpen={isOpenModal}
        message={`Total order price: ${getTotalPrice(cartGoods)}`}
        handleClose={handleClose}
      />
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
