import React, { FC } from 'react';
import { Card, Box } from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '@/user/store/thunks';
import { IGoods, IProductCardItem } from '@/interfaces';
import {
  userCartSelector,
  userRoleSelector,
  userIdSelector,
} from '@/user/store/selectors';
import './productCard.scss';

export const ProductCard: FC<IProductCardItem> = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRole = useSelector(userRoleSelector);
  const cartGoods = useSelector(userCartSelector);
  const userId = useSelector(userIdSelector);
  const goCardPage = () => {
    navigate(`goods/${item.id}`);
  };

  const addToCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart({ id: userId, item, cart: cartGoods }));
  };

  return (
    <Card pad="large" onClick={goCardPage} className="product-card">
      <Box className="card-img">
        <img src={item.image} alt={item.title} />
      </Box>
      <span>{item.title}</span>
      <span>{item.price}₴</span>
      <span>{item.raiting}</span>
      <button
        type="button"
        className="btn btn-card"
        onClick={addToCard}
        disabled={userRole === 'admin'}
      >
        {cartGoods.find((goods: IGoods) => goods.id === item.id)
          ? 'Added to cart'
          : 'Add to Cart'}
      </button>
    </Card>
  );
};
