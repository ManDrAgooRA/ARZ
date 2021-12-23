import React from 'react';
import PropTypes from 'prop-types';
import { FormField, MaskedInput } from 'grommet';
import { User } from 'grommet-icons';

export const UserNameInput = ({ register, errors }) => {
  return (
    <FormField
      label="User Name"
      name="userName"
      placeholder="user name"
      error={errors.userName?.message}
      {...register('userName')}
    >
      <MaskedInput name="userName" placeholder="user name" icon={<User />} />
    </FormField>
  );
};

UserNameInput.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
