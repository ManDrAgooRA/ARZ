import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Box, FormField, MaskedInput, TextArea, FileInput } from 'grommet';
import { allGoodsSelector } from '@/user/store/selectors';
import { IGoods } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';
import {
  changeAminAddModalState,
  changeAminEditModalState,
} from '@/user/store/actions';
import { editProduct } from '@/user/store/thunks/editProduct';
import { addNewProduct } from '@/user/store/thunks/addProduct';
import {
  priceMask,
  raitingMask,
} from '@/admin/components/AdminGoodsForm/masks';
import './AdminGoodsForm.scss';

const schema = yup.object({
  productImage: yup.string().required(),
  title: yup.string().required(),
  categories: yup.string().required(),
  raiting: yup.number().required(),
  price: yup.number().required(),
  countries: yup.string().required(),
  description: yup.string().required(),
  isSale: yup.string().required(),
});

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
    resolver: yupResolver(schema),
  });

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setProductImage(base64);
  };
  const onSubmit = (data: IGoods) => {
    if (curentForm === 'add') {
      const formData = { ...data, isFavorite: false, productImage };
      dispatch(
        addNewProduct({
          requestBody: formData,
        })
      );
      dispatch(changeAminAddModalState(false));
    } else {
      const formData = { ...data, isFavorite: false, productImage };
      dispatch(editProduct({ id: productId, requestBody: formData }));
      dispatch(changeAminEditModalState(false));
    }
    reset();
  };

  return (
    <Box className="admin-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        <Box align="center" justify="start" pad="small">
          <Box width="medium">
            Picture:
            <FormField
              placeholder="Product Image"
              error={errors.productImage?.message}
            >
              <FileInput
                {...register('productImage')}
                value={
                  curentForm === 'edit'
                    ? allGoods[productId || 0].productImage
                    : ''
                }
                onChange={(e: any) => {
                  uploadImage(e);
                }}
              />
            </FormField>
          </Box>
          <img src={productImage} className="form-img" />
        </Box>

        <FormField
          label="Title"
          placeholder="Title"
          error={errors.title?.message}
          {...register('title')}
        >
          <MaskedInput name="title" placeholder="Title" />
        </FormField>

        <FormField
          label="Categories"
          placeholder="Categories"
          error={errors.categories?.message}
          {...register('categories')}
        >
          <MaskedInput name="categories" placeholder="Categories" />
        </FormField>

        <FormField
          label="Price"
          placeholder="Price"
          error={errors.price?.message}
          {...register('price')}
        >
          <MaskedInput name="price" placeholder="Price" mask={priceMask} />
        </FormField>

        <FormField
          label="Raiting"
          error={errors.raiting?.message}
          {...register('raiting')}
        >
          <MaskedInput name="raiting" mask={raitingMask} />
        </FormField>

        <FormField
          label="Сountries"
          placeholder="Сountries"
          error={errors.countries?.message}
          {...register('countries')}
        >
          <MaskedInput name="countries" placeholder="Сountries" />
        </FormField>

        <FormField
          label="Description"
          placeholder="Description"
          error={errors.description?.message}
          {...register('description')}
        >
          <TextArea name="description" placeholder="Description" />
        </FormField>

        <Box className="radio-wrapper">
          <label>IsSale:</label>
          <label className="radio">
            <input type="radio" value="true" {...register('isSale')} />
            <span className="radio__round" />
            True
          </label>

          <label className="radio">
            <input type="radio" value="false" {...register('isSale')} />
            <span className="radio__round" />
            False
          </label>
        </Box>
        <button type="submit" className="btn btn-form">
          Add product
        </button>
      </form>
    </Box>
  );
};
