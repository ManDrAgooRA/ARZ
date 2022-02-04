import React, { FC } from 'react';
import { Box, FileInput, FormField } from 'grommet';
import { IImageInput } from '@/admin/interfaces';

export const ImageInput: FC<IImageInput> = ({
  register,
  errors,
  productImage,
  setProductImage,
}) => {
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

  return (
    <Box fill align="center" justify="start" pad="large">
      <Box width="medium">
        Picture:
        <FormField
          name="productImage"
          placeholder="Product Image"
          error={errors.productImage?.message}
          {...register('userName')}
        >
          <FileInput
            name="productImage"
            onChange={(e: any) => {
              uploadImage(e);
            }}
          />
        </FormField>
      </Box>
      <img src={productImage} height="200px" />
    </Box>
  );
};
