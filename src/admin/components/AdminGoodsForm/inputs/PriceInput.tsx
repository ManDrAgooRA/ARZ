import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInput } from '@/admin/interfaces';
import { priceMask } from '@/admin/components/AdminGoodsForm/masks';

export const PriceInput: FC<IAdminInput> = ({ register, errorMessage }) => {
  return (
    <FormField
      label="Price"
      placeholder="Price"
      error={errorMessage}
      {...register('price')}
    >
      <MaskedInput name="price" placeholder="Price" mask={priceMask} />
    </FormField>
  );
};
