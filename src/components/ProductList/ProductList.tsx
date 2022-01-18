import React, { FC, useState, useEffect, useContext } from 'react';
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from '@/components/ProductCard/ProductCard';
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
  authError,
} from '@/store/selectors';
import { getCountColumns } from '@/utils';
import { THEME } from '@/constants';
import { Modal } from '@/components/Modal/Modal';
import { fetchGoods, fetchAllGoods } from '@/store/thunks/goods';
import { CustomSpinner } from '@/components/Spinner/Spinner';
import './products.scss';
import { IGoods } from '@/interfaces';

export const ProductList: FC = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
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
  const error = useSelector(authError);

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

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
        handleOpen,
      })
    );
  }, [sort, order, countries, categories, minPrice, currentMaxPrice, isLogin]);

  if (isLoadGoods && !isOpenModal) {
    return <CustomSpinner />;
  }

  return (
    <Grommet theme={THEME}>
      <Box pad="small" className="products__list">
        <Modal isOpen={isOpenModal} message={error} handleClose={handleClose} />
        <Grid gap="small" columns={getCountColumns(size)}>
          {goods.map((item: IGoods) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};
