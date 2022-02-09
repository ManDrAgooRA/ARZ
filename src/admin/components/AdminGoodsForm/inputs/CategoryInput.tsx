import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInput } from '@/admin/interfaces';

export const CategoryInput: FC<IAdminInput> = ({ register, errorMessage }) => {
  return (
    <FormField
      label="Categories"
      placeholder="Categories"
      error={errorMessage}
      {...register('categories')}
    >
      <MaskedInput name="categories" placeholder="Categories" />
    </FormField>
  );
};
