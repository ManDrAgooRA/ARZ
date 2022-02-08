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
  adminModaAddlStateSelector,
  adminModaEditlStateSelector,
} from '@/user/store/selectors';
import {
  changeAminEditModalState,
  changeAminAddModalState,
  setCurrentMaxPrice,
} from '@/user/store/actions';
import { fetchGoods, fetchAllGoods } from '@/user/store/thunks';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import { AdminModal } from '@/admin/components/AdminModal/AdminModal';
import { TabelPagination } from '@/admin/components/Tables/TabelPagination/TabelPagination';
import { AdminGoodsForm } from '@/admin/components/AdminGoodsForm/AdminGoodsForm';
import '../tabel.scss';
import { getMinMaxValue } from '@/utils';

export const GoodsTable = () => {
  const params = useParams();
  const adminAddModalState = useSelector(adminModaAddlStateSelector);
  const adminEditModalState = useSelector(adminModaEditlStateSelector);
  const [currentPage, setCurrentPage] = useState(params.page || 1);
  const [productId, setProductId] = useState(0);
  const [curentForm, setCurrentForm] = useState('add');
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
  const { maxValue } = getMinMaxValue(allGoods);

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
    dispatch(setCurrentMaxPrice(maxValue));
  }, [currentPage]);

  const handleChange = ({ page }: { page: number }) => {
    setCurrentPage(page);
    navigate(`/admin/goods/${page}`);
  };

  const handleAddModalClose = () => {
    dispatch(changeAminAddModalState(false));
  };

  const handleEditModalClose = () => {
    dispatch(changeAminEditModalState(false));
  };

  if (isLoadGoods) {
    return <CustomSpinner />;
  }

  return (
    <Box align="center" className="table-wrapper">
      <AdminModal isOpen={adminAddModalState} handleClose={handleAddModalClose}>
        <AdminGoodsForm curentForm={curentForm} productId={productId} />
      </AdminModal>

      <AdminModal
        isOpen={adminEditModalState}
        handleClose={handleEditModalClose}
      >
        <AdminGoodsForm curentForm={curentForm} productId={productId} />
      </AdminModal>
      <Heading level={2}>All Goods</Heading>

      <button
        className="btn btn-form btn-form__admin"
        type="button"
        onClick={() => {
          dispatch(changeAminAddModalState(true));
          setCurrentForm('add');
        }}
      >
        Add new Product
      </button>

      <Box overflow="auto">
        <DataTable
          sortable
          data={goods}
          columns={getTableColumns(goods)}
          pin
          onClickRow={({ datum }) => {
            setProductId(datum.id);
            dispatch(changeAminEditModalState(true));
            setCurrentForm('edit');
          }}
        />
      </Box>
      <TabelPagination
        items={allGoods}
        currentPage={+currentPage}
        handleChange={handleChange}
      />
    </Box>
  );
};
