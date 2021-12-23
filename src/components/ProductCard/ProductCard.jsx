import React from 'react';
import PropTypes from 'prop-types';
import { Card, Box } from 'grommet';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const goSinglePage = () => {
    navigate(`goods/${item.id}`);
  };

  return (
    <Card pad="large" onClick={goSinglePage}>
      <Box className="card-img">
        <img src={item.image} alt={item.title} />
      </Box>
      <span>{item.title}</span>
      <span>{item.price}₴</span>
      <span>{item.raiting}</span>
    </Card>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
};
