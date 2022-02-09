import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'grommet';
import { allGoodsSelector } from '@/user/store/selectors';
import { IGoods } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';
import { adminGoodsForm } from '@/admin/constants/validations/AdminGoodsForm';
import { changeAminModalState } from '@/user/store/actions';
import { editProduct } from '@/user/store/thunks/editProduct';
import { addNewProduct } from '@/user/store/thunks/addProduct';
import {
  TitleInput,
  ImageInput,
  IsSaleInput,
  CategoryInput,
  PriceInput,
  RaitnigInput,
  CountryInput,
  DescriptionInput,
} from '@/admin/components/AdminGoodsForm/inputs';
import './AdminGoodsForm.scss';

export const AdminGoodsForm: FC<IAdminForm> = ({ curentForm, productId }) => {
  const dispatch = useDispatch();
  const allGoods = useSelector(allGoodsSelector);
  const [productImage, setProductImage] = useState(
    curentForm === 'edit' ? allGoods[productId || 0].productImage : ''
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productImage:
        curentForm === 'edit' ? allGoods[productId || 0].productImage : '',
      title: curentForm === 'edit' ? allGoods[productId || 0].title : '',
      categories:
        curentForm === 'edit' ? allGoods[productId || 0].categories : '',
      price: curentForm === 'edit' ? allGoods[productId || 0].price : '',
      raiting: curentForm === 'edit' ? allGoods[productId || 0].raiting : '',
      countries:
        curentForm === 'edit' ? allGoods[productId || 0].countries : '',
      description:
        curentForm === 'edit' ? allGoods[productId || 0].description : '',
      isSale: curentForm === 'edit' ? allGoods[productId || 0].isSale : '',
    },
    resolver: yupResolver(adminGoodsForm),
  });

  const onSubmit = (data: IGoods) => {
    if (curentForm === 'add') {
      const formData = { ...data, isFavorite: false, productImage };
      dispatch(
        addNewProduct({
          requestBody: formData,
        })
      );
      dispatch(changeAminModalState(false));
    } else {
      const formData = { ...data, isFavorite: false, productImage };
      dispatch(editProduct({ id: productId, requestBody: formData }));
      dispatch(changeAminModalState(false));
    }
    reset();
  };

  return (
    <Box className="admin-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        <ImageInput
          register={register}
          errorMessage={errors.productImage?.message}
          productImage={productImage}
          setProductImage={setProductImage}
        />
        <TitleInput register={register} errorMessage={errors.title?.message} />
        <CategoryInput
          register={register}
          errorMessage={errors.categories?.message}
        />
        <CountryInput
          register={register}
          errorMessage={errors.countries?.message}
        />
        <PriceInput register={register} errorMessage={errors.price?.message} />
        <RaitnigInput
          register={register}
          errorMessage={errors.raiting?.message}
        />

        <DescriptionInput
          register={register}
          errorMessage={errors.description?.message}
        />

        <IsSaleInput
          register={register}
          errorMessage={errors.isSale?.message}
        />
        <button type="submit" className="btn btn-form">
          {curentForm === 'edit' ? 'Edit product' : 'Add product'}
        </button>
      </form>
    </Box>
  );
};
