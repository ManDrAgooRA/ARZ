import React, { FC } from 'react';
import { Box } from 'grommet';
import { IAdminInputs } from '@/admin/interfaces';

export const SaleInput: FC<IAdminInputs> = ({ register, errors }) => {
  return (
    <Box className="radio-wrapper">
      <label>IsSale:</label>
      <label className="radio">
        <input
          name="saleRadio"
          type="radio"
          value="true"
          {...register('isSale')}
          error={errors.isSale?.message}
        />
        <span className="radio__round" />
        True
      </label>

      <label className="radio">
        <input
          name="saleRadio"
          type="radio"
          value="false"
          checked
          {...register('isSale')}
          error={errors.isSale?.message}
        />
        <span className="radio__round" />
        False
      </label>
    </Box>
  );
};
