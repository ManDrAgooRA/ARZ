import React, { useState, useEffect } from 'react';
import { Box, DataTable, Heading } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTableColumns } from '@/admin/utlis';
import {
  goodsSelector,
  isLoadGoodsSelector,
  goodsSortSelector,
  goodsOrderSelector,
  goodsCountriesSelector,
  goodsCategoriesSelector,
  goodsMinPriceSelector,
  goodsCurrentMaxPriceSelector,
  allGoodsSelector,
} from '@/user/store/selectors';
import { fetchGoods, fetchAllGoods } from '@/user/store/thunks';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import { TabelPagination } from '@/admin/components/Tables/TabelPagination/TabelPAgination';
import '../tabel.scss';

export const GoodsTable = () => {
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
  const allGoods = useSelector(allGoodsSelector);

  useEffect(() => {
    dispatch(fetchAllGoods());
    dispatch(
      fetchGoods({
        limit: 20,
        page: +currentPage,
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

  if (isLoadGoods) {
    return <CustomSpinner />;
  }

  return (
    <Box align="center" className="table-wrapper">
      <Heading level={2}>All Goods</Heading>
      <Box overflow="auto">
        <DataTable sortable data={goods} columns={getTableColumns(goods)} pin />
      </Box>
      <TabelPagination
        items={allGoods}
        currentPage={+currentPage}
        handleChange={handleChange}
      />
    </Box>
  );
};
