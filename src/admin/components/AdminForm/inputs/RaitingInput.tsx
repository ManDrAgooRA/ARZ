import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInputs } from '@/admin/interfaces';

export const RaitingInput: FC<IAdminInputs> = ({ register, errors }) => {
  return (
    <FormField
      label="Raiting"
      name="raiting"
      placeholder="Raiting"
      error={errors.raiting?.message}
      {...register('raiting')}
    >
      <MaskedInput name="raiting" placeholder="Raiting" />
    </FormField>
  );
};
