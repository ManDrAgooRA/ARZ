import React from 'react';
import PropTypes from 'prop-types';
import { Card, Box } from 'grommet';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const goSinglePage = () => {
    navigate(`/${item.id}`);
  };

  return (
    <Card pad="large" onClick={goSinglePage}>
      <Box>
        <img src={item.image} alt={item.title} />
      </Box>
      <span>{item.title}</span>
      <span>{`${item.price}₴`}</span>
    </Card>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
};
export default ProductCard;
