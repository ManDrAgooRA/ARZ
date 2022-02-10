import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'grommet';
import { allGoodsSelector } from '@/user/store/selectors';
import { IGoods } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';
import { adminGoodsForm } from '@/admin/constants/validations/AdminGoodsForm';
import { changeAdminModalState } from '@/user/store/actions';
import { editProductData } from '@/user/store/thunks/editProduct';
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
import { getDefaultValues } from '@/admin/utlis';
import './AdminGoodsForm.scss';

export const AdminGoodsForm: FC<IAdminForm> = ({ currentForm, productId }) => {
  const dispatch = useDispatch();
  const allGoods = useSelector(allGoodsSelector);
  const [productImage, setProductImage] = useState(
    currentForm === 'edit' ? allGoods[productId || 0].productImage : ''
  );
  const [radioValue, setRadioValue] = useState(
    currentForm === 'edit' ? allGoods[productId || 0].isSale : false
  );
  const defaultValue = getDefaultValues(currentForm, allGoods, productId || 0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productImage: defaultValue?.productImage,
      title: defaultValue?.title,
      categories: defaultValue?.categories,
      price: defaultValue?.price,
      raiting: defaultValue?.raiting,
      countries: defaultValue?.countries,
      description: defaultValue?.description,
      isSale: defaultValue?.isSale,
    },
    resolver: yupResolver(adminGoodsForm),
  });

  const onSubmit = (data: IGoods) => {
    if (currentForm === 'add') {
      const formData = {
        ...data,
        isFavorite: false,
        productImage,
        isSale: radioValue,
      };
      dispatch(
        addNewProduct({
          requestBody: formData,
        })
      );
      dispatch(changeAdminModalState(false));
    } else {
      const formData = {
        ...data,
        isFavorite: false,
        productImage,
        isSale: radioValue,
      };
      dispatch(editProductData({ id: productId || 0, requestBody: formData }));
      dispatch(changeAdminModalState(false));
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
          setRadioValue={setRadioValue}
          radioValue={radioValue}
        />
        <button type="submit" className="btn btn-form">
          {currentForm === 'edit' ? 'Edit product' : 'Add product'}
        </button>
      </form>
    </Box>
  );
};
