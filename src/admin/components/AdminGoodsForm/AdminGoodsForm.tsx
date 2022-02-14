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
  ImageInput,
  IsSaleInput,
} from '@/admin/components/AdminGoodsForm/inputs';
import { CastomInput } from '@/sharedComponents/CustomInputs/CastomInput/CastomInput';
import { CastomTextArea } from '@/sharedComponents/CustomInputs/CastomTextArea/CastomTextArea';
import { getDefaultValues, getAdminInputs } from '@/admin/utlis';
import './AdminGoodsForm.scss';

export const AdminGoodsForm: FC<IAdminForm> = ({ currentForm, productId }) => {
  const dispatch = useDispatch();
  const allGoods = useSelector(allGoodsSelector);
  const [productImage, setProductImage] = useState(
    currentForm === 'edit' ? allGoods[productId || 0].productImage : ''
  );
  const [isSaleValue, setIsSaleValue] = useState(
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
        id: productId,
        isFavorite: false,
        productImage,
        isSale: isSaleValue,
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
        id: productId,
        isFavorite: false,
        productImage,
        isSale: isSaleValue,
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
          errorMessage={errors.productImage?.message || ''}
          productImage={productImage}
          setProductImage={setProductImage}
        />

        {getAdminInputs(errors).map((item) => {
          return (
            <CastomInput
              key={item.name}
              label={item.label}
              name={item.name}
              placeholder={item.label}
              errorMessage={item.errorMessage}
              register={register}
              mask={item.mask}
            />
          );
        })}

        <CastomTextArea
          label="Description"
          name="description"
          placeholder="Description"
          register={register}
          errorMessage={errors.description?.message || ''}
        />

        <IsSaleInput
          register={register}
          errorMessage={errors.isSale?.message || ''}
          setIsSaleValue={setIsSaleValue}
          isSaleValue={isSaleValue}
        />

        <button type="submit" className="btn btn-form">
          {currentForm === 'edit' ? 'Edit product' : 'Add product'}
        </button>
      </form>
    </Box>
  );
};
