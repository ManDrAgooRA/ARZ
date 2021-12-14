import React, { useEffect, useContext } from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { getCountColumns } from '../../utils';
import { THEME } from '../../constants';
import { fetchGoods, fetchAllGoods } from '../../store/thunks/goods';
import { MySpinner } from '../MySpinner/MySpinner';
import './products.scss';

const ProductList = () => {
  const size = useContext(ResponsiveContext);
  const dispatch = useDispatch();
  const {
    goods,
    isLoadGoods,
    sort,
    order,
    countries,
    categories,
    minPrice,
    currentMaxPrice,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchAllGoods());
    dispatch(
      fetchGoods({
        limit: 20,
        page: 1,
        sort,
        order,
        countries,
        categories,
        minPrice,
        currentMaxPrice,
      })
    );
  }, [dispatch, sort, order, countries, categories, minPrice, currentMaxPrice]);

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
