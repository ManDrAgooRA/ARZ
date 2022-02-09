import React, { FC } from 'react';
import { Box } from 'grommet';
import { IAdminRadio } from '@/admin/interfaces';

export const IsSaleInput: FC<IAdminRadio> = ({
  register,
  errorMessage,
  setRadioValue,
  radioValue,
}) => {
  const hanleChange = (value: string) => {
    if (value === 'true') {
      setRadioValue(true);
    } else {
      setRadioValue(false);
    }
  };
  return (
    <Box className="radio-wrapper">
      <label className="radio-title">IsSale:</label>
      <label className="radio">
        <input
          type="radio"
          value="true"
          checked={radioValue === true}
          {...register('isSale')}
          className="radio-button"
          onChange={(e: any) => hanleChange(e.target.value)}
        />
        <span className="radio__round" />
        True
      </label>

      <label className="radio">
        <input
          type="radio"
          value="false"
          checked={radioValue === false}
          {...register('isSale')}
          onChange={(e: any) => hanleChange(e.target.value)}
          className="radio-button"
        />
        <span className="radio__round" />
        False
      </label>
      <span className="radio-error">{errorMessage}</span>
    </Box>
  );
};
