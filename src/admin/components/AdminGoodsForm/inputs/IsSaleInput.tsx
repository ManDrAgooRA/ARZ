import React, { FC } from 'react';
import { Box } from 'grommet';
import { IAdminInput } from '@/admin/interfaces';

export const IsSaleInput: FC<IAdminInput> = ({ register, errorMessage }) => {
  return (
    <Box className="radio-wrapper">
      <label>IsSale:</label>
      <label className="radio">
        <input type="radio" value="true" {...register('isSale')} />
        <span className="radio__round" />
        True
      </label>

      <label className="radio">
        <input type="radio" value="false" {...register('isSale')} />
        <span className="radio__round" />
        False
      </label>
      <span className="radio-error">{errorMessage}</span>
    </Box>
  );
};
