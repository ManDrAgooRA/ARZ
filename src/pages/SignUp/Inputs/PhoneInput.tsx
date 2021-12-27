import React, { FC } from 'react';
import { Phone } from 'grommet-icons';
import { FormField, MaskedInput } from 'grommet';
import { PHONE_MASK } from '../masks';
import { IInput } from '../../../interfaces';

export const PhoneInput: FC<IInput> = ({ register, errors }) => {
  return (
    <FormField
      label="Phone"
      name="phone"
      error={errors.phone?.message}
      {...register('phone')}
    >
      <MaskedInput name="phone" icon={<Phone />} mask={PHONE_MASK} />
    </FormField>
  );
};
