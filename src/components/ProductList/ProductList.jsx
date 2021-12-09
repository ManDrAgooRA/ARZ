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
  const dispatch = useDispatch();
  const { goods, isLoadGoods, sortBy } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchAllGoods({ limit: 20, page: 1, sortBy }));
  }, [dispatch, sortBy]);

  if (isLoadGoods) {
    return <MySpinner />;
  }

  return (
    <Grommet pad="small" theme={THEME}>
      <Box pad="small" className="products__list">
        <Grid gap="small" columns={getCountColumns(size)}>
          {goods.map((item) => (
            <ProductCard pad="small" key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};

export default ProductList;
