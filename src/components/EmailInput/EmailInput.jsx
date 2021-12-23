import React from 'react';
import PropTypes from 'prop-types';
import { FormField, MaskedInput } from 'grommet';
import { MailOption } from 'grommet-icons';
import { EMAIL_MASK } from '../../constants';

export const EmailInput = ({ register, errors }) => {
  return (
    <FormField
      label="Email"
      name="email"
      error={errors.email?.message}
      {...register('email')}
    >
      <MaskedInput icon={<MailOption />} name="email" mask={EMAIL_MASK} />
    </FormField>
  );
};

EmailInput.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
