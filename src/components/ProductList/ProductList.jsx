import React, { useEffect, useContext } from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { getCountColumns } from '../../utils';
import { THEME } from '../../constants';
import { fetchAllGoods } from '../../store/thunks/goods';
import { MySpinner } from '../MySpinner/MySpinner';
import './products.scss';

const ProductList = () => {
  const size = useContext(ResponsiveContext);
  const { goods, isLoadGoods } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGoods(20, 1));
  }, [dispatch]);

  if (isLoadGoods) {
    return <MySpinner />;
  }

  return (
    <Grommet pad="small" theme={THEME}>
      <Box className="products__list">
        <Grid gap="small" columns={getCountColumns(size)}>
          {goods.map((item) => (
            <ProductCard pad="large" key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};

export default ProductList;
