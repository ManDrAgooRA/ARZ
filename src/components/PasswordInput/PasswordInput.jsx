import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormField, MaskedInput, Button } from 'grommet';
import { Hide, View } from 'grommet-icons';

export const PasswordInput = ({ register, errors }) => {
  const [passValue, setPassValue] = useState('');
  const [reveal, setReveal] = useState(false);

  return (
    <FormField label="Password" name="name" {...register('password')}>
      <div className="passord-wrap">
        <MaskedInput
          name="password"
          plain
          type={reveal ? 'text' : 'password'}
          value={passValue}
          error={errors.password?.message}
          placeholder="Password"
          onChange={(event) => setPassValue(event.target.value)}
        />
        <Button
          icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </div>
    </FormField>
  );
};

PasswordInput.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};
