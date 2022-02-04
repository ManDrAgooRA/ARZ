import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInputs } from '@/admin/interfaces';

export const PriceInput: FC<IAdminInputs> = ({ register, errors }) => {
  return (
    <FormField
      label="Price"
      name="price"
      placeholder="Price"
      error={errors.price?.message}
      {...register('price')}
    >
      <MaskedInput name="price" placeholder="Price" />
    </FormField>
  );
};
