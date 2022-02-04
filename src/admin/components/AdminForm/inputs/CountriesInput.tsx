import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInputs } from '@/admin/interfaces';

export const CountriesInput: FC<IAdminInputs> = ({ register, errors }) => {
  return (
    <FormField
      label="Countires"
      name="countires"
      placeholder="Countires"
      error={errors.countires?.message}
      {...register('countires')}
    >
      <MaskedInput name="countires" placeholder="Countires" />
    </FormField>
  );
};
