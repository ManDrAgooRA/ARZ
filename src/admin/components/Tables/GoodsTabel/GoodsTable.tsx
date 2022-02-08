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
import { AdminModal } from '@/admin/components/AdminModal/AdminModal';
import { TabelPagination } from '@/admin/components/Tables/TabelPagination/TabelPagination';
import { AdminGoodsForm } from '@/admin/components/AdminGoodsForm/AdminGoodsForm';
import '../tabel.scss';

export const GoodsTable = () => {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(params.page || 1);
  const [productId, setProductId] = useState(0);
  const [curentForm, setCurrentForm] = useState('add');
  const [isOpenModal, setIsOpenModal] = useState({
    editModal: false,
    addModal: false,
  });
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
    navigate(`/admin/goods/${page}`);
  };

  const handleAddModalClose = () => {
    setIsOpenModal({ ...isOpenModal, addModal: false });
  };

  const handleEditModalClose = () => {
    setIsOpenModal({ ...isOpenModal, editModal: false });
  };

  if (isLoadGoods) {
    return <CustomSpinner />;
  }

  return (
    <Box align="center" className="table-wrapper">
      <AdminModal
        isOpen={isOpenModal.addModal}
        handleClose={handleAddModalClose}
      >
        <AdminGoodsForm curentForm={curentForm} productId={productId} />
      </AdminModal>

      <AdminModal
        isOpen={isOpenModal.editModal}
        handleClose={handleEditModalClose}
      >
        <AdminGoodsForm curentForm={curentForm} productId={productId} />
      </AdminModal>
      <Heading level={2}>All Goods</Heading>

      <button
        className="btn btn-form btn-form__admin"
        type="button"
        onClick={() => {
          setIsOpenModal({ ...isOpenModal, addModal: true });
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
            setIsOpenModal({ ...isOpenModal, editModal: true });
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
