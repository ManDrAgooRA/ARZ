import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInputs } from '@/admin/interfaces';

export const CategoriesInput: FC<IAdminInputs> = ({ register, errors }) => {
  return (
    <FormField
      label="Categories"
      name="categories"
      placeholder="Categories"
      error={errors.categories?.message}
      {...register('categories')}
    >
      <MaskedInput name="categories" placeholder="Categories" />
    </FormField>
  );
};
