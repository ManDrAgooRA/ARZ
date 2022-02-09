import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInput } from '@/admin/interfaces';

export const CountryInput: FC<IAdminInput> = ({ register, errorMessage }) => {
  return (
    <FormField
      label="Сountries"
      placeholder="Сountries"
      error={errorMessage}
      {...register('countries')}
    >
      <MaskedInput name="countries" placeholder="Сountries" />
    </FormField>
  );
};
