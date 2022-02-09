import React, { FC } from 'react';
import { FormField, Box, FileInput } from 'grommet';
import { IProductImageInput } from '@/admin/interfaces';

export const ImageInput: FC<IProductImageInput> = ({
  register,
  errorMessage,
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
    <Box align="center" justify="start" pad="small">
      <Box width="medium">
        Picture:
        <FormField placeholder="Product Image" error={errorMessage}>
          <FileInput
            {...register('productImage')}
            value={productImage}
            onChange={(e: any) => {
              if (e.target.value) {
                uploadImage(e);
              }
            }}
          />
        </FormField>
      </Box>
      <img src={productImage} className="form-img" />
    </Box>
  );
};
