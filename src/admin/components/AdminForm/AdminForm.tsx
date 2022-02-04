import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ImageInput } from '@/admin/components/AdminForm/inputs/ImageInput';
import { TitleInput } from '@/admin/components/AdminForm/inputs/TitleInput';
import { CategoriesInput } from '@/admin/components/AdminForm/inputs/CategoriesInput';
import { PriceInput } from '@/admin/components/AdminForm/inputs/PriceInput';
import { RaitingInput } from '@/admin/components/AdminForm/inputs/RaitingInput';
import { CountriesInput } from '@/admin/components/AdminForm/inputs/CountriesInput';
import { DescriptionInput } from '@/admin/components/AdminForm/inputs/DescriptionInput';
import { SaleInput } from '@/admin/components/AdminForm/inputs/SaleInput';
import { addProduct } from '@/admin/api';
import { IGoods } from '@/interfaces';
import './adminForm.scss';

const schema = yup.object({
  productImage: yup.string(),
  title: yup.string().required(),
  categories: yup.string().required(),
  raiting: yup.number().required(),
  price: yup.number().required(),
  countires: yup.string().required(),
  description: yup.string().required(),
  isSale: yup.string().required(),
});

export const AdminForm = () => {
  const [productImage, setProductImage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IGoods) => {
    const formData = { ...data, isFavorite: false, productImage };
    addProduct({ requestBody: formData });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageInput
        register={register}
        errors={errors}
        productImage={productImage}
        setProductImage={setProductImage}
      />
      <TitleInput register={register} errors={errors} />
      <CategoriesInput register={register} errors={errors} />
      <PriceInput register={register} errors={errors} />
      <RaitingInput register={register} errors={errors} />
      <CountriesInput register={register} errors={errors} />
      <DescriptionInput register={register} errors={errors} />
      <SaleInput register={register} errors={errors} />
      <button type="submit">change</button>
    </form>
  );
};
