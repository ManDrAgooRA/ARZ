import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormField, MaskedInput } from 'grommet';
import { Calendar } from 'grommet-icons';
import { getDateMask } from '../masks';

export const DateInput = ({ register, errors }) => {
  const [value, setValue] = useState('');

  return (
    <FormField
      label="Date of birthday"
      name="dateOfBirthDay"
      error={errors.dateOfBirth?.message}
      {...register('dateOfBirthDay')}
    >
      <MaskedInput
        icon={<Calendar />}
        name="dateOfBirthDay"
        mask={getDateMask(value)}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </FormField>
  );
};

DateInput.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
