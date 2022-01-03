import React, { FC, useEffect, useContext } from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';
import {
  goodsSelector,
  isLoadGoodsSelector,
  goodsSortSelector,
  goodsOrderSelector,
  goodsCountriesSelector,
  goodsCategoriesSelector,
  goodsMinPriceSelector,
  goodsCurrentMaxPriceSelector,
  authIsLogin,
} from '../../store/selectors';
import { getCountColumns } from '../../utils';
import { THEME } from '../../constants';
import { fetchGoods, fetchAllGoods } from '../../store/thunks/goods';
import { MySpinner } from '../MySpinner/MySpinner';
import './products.scss';

export const ProductList: FC = () => {
  const dispatch = useDispatch();
  const size = useContext(ResponsiveContext);
  const goods = useSelector(goodsSelector);
  const isLoadGoods = useSelector(isLoadGoodsSelector);
  const sort = useSelector(goodsSortSelector);
  const order = useSelector(goodsOrderSelector);
  const countries = useSelector(goodsCountriesSelector);
  const categories = useSelector(goodsCategoriesSelector);
  const minPrice = useSelector(goodsMinPriceSelector);
  const currentMaxPrice = useSelector(goodsCurrentMaxPriceSelector);
  const isLogin = useSelector(authIsLogin);

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
  }, [sort, order, countries, categories, minPrice, currentMaxPrice, isLogin]);

  if (isLoadGoods) {
    return <MySpinner />;
  }

  return (
    <Grommet theme={THEME}>
      <Box pad="small" className="products__list">
        <Grid gap="small" columns={getCountColumns(size)}>
          {goods.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};
