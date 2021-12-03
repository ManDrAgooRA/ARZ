import React from 'react';
import PropTypes from 'prop-types';
import { Card, Box } from 'grommet';

const ProductCard = ({ item }) => {
  return (
    <Card pad="large">
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
