import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Trash } from 'grommet-icons';
import { LINKS } from '@/constants';
import { IProductCardItem } from '@/interfaces';
import { removeFromCart, changeCountCart } from '@/user/store/actions';
import CartInput from '@/user/components/CartInput/CartInput';
import './cartItem.scss';

export const CartItem: FC<IProductCardItem> = ({ item }) => {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  const incrementCount = () => {
    setCount(count + 1);
    dispatch(changeCountCart(item.id, +count + 1));
  };

  const decrementCount = () => {
    setCount(count - 1);
    dispatch(changeCountCart(item.id, +count - 1));
  };

  const handlerDelete = () => {
    dispatch(removeFromCart(item.id));
  };

  const onChangeHandler = (value: string) => {
    setCount(+value <= 0 ? 1 : +value);
    dispatch(changeCountCart(item.id, +value <= 0 ? 1 : +value));
  };

  return (
    <div className="cart-item">
      <div className="cart-description">
        <div className="cart-img">
          <img src={item.image} alt="#" />
        </div>
        <div className="cart-content">
          <p>id: {item.id}</p>
          <p>
            title:
            <Link to={`${LINKS.goods}/${item.id}`}>{item.title}</Link>
          </p>
          <p>price: {item.price}/1</p>
          <p>
            total price: {item.price * count}/{count}
          </p>
          <button
            type="button"
            onClick={handlerDelete}
            className="btn btn-cart_trash"
          >
            <Trash />
          </button>
        </div>
      </div>

      <div className="cart-counter">
        <button
          type="button"
          onClick={decrementCount}
          disabled={count <= 1}
          className="btn btn-cart_counter"
        >
          -
        </button>
        <CartInput value={count} onChange={onChangeHandler} />
        <button
          type="button"
          onClick={incrementCount}
          className="btn btn-cart_counter"
        >
          +
        </button>
      </div>
    </div>
  );
};
