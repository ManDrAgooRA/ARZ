import React, { useState, useEffect } from 'react';
import { Box, DataTable, Pagination } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTableColumns } from '@/utils';
import {
  goodsSelector,
  isLoadGoodsSelector,
  goodsSortSelector,
  goodsOrderSelector,
  goodsCountriesSelector,
  goodsCategoriesSelector,
  goodsMinPriceSelector,
  goodsCurrentMaxPriceSelector,
} from '@/user/store/selectors';
import { fetchGoods } from '@/user/store/thunks';
import './userTabel.scss';

export const Tabel = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(params.page || 1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goods = useSelector(goodsSelector);
  const isLoadGoods = useSelector(isLoadGoodsSelector);
  const sort = useSelector(goodsSortSelector);
  const order = useSelector(goodsOrderSelector);
  const countries = useSelector(goodsCountriesSelector);
  const categories = useSelector(goodsCategoriesSelector);
  const minPrice = useSelector(goodsMinPriceSelector);
  const currentMaxPrice = useSelector(goodsCurrentMaxPriceSelector);

  useEffect(() => {
    console.log(params);
    dispatch(
      fetchGoods({
        limit: 10,
        page: currentPage,
        sort,
        order,
        countries,
        categories,
        minPrice,
        currentMaxPrice,
      })
    );
  }, [currentPage]);

  const handleChange = ({ page }: { page: number }) => {
    setCurrentPage(page);
    navigate(`/admin/goods/page/${page}`);
  };

  return (
    <Box align="center" className="table-wrapper">
      <Box overflow="auto">
        <DataTable sortable data={goods} columns={getTableColumns(goods)} pin />
      </Box>
      <Box className="pagination-wrapper" pad="small">
        <Pagination
          numberItems={10}
          page={+currentPage}
          size="medium"
          step={1}
          onChange={(e) => handleChange(e)}
        />
      </Box>
    </Box>
  );
};
