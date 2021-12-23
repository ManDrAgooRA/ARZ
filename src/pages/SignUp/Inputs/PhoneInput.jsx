import React from 'react';
import { Phone } from 'grommet-icons';
import PropTypes from 'prop-types';
import { FormField, MaskedInput } from 'grommet';
import { PHONE_MASK } from '../masks';

export const PhoneInput = ({ register, errors }) => {
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

PhoneInput.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
