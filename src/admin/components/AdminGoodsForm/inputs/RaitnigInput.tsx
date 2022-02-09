import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInput } from '@/admin/interfaces';
import { raitingMask } from '@/admin/components/AdminGoodsForm/masks';

export const RaitnigInput: FC<IAdminInput> = ({ register, errorMessage }) => {
  return (
    <FormField label="Raiting" error={errorMessage} {...register('raiting')}>
      <MaskedInput name="raiting" mask={raitingMask} />
    </FormField>
  );
};
