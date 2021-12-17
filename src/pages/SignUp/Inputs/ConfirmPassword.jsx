import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormField, MaskedInput, Button } from 'grommet';
import { Hide, View } from 'grommet-icons';

const ConfirmPassword = ({ register, errors }) => {
  const [confirmReveal, setConfirmReveal] = useState(false);

  return (
    <FormField
      label="Confirm Password"
      name="confirmPass"
      error={errors.confirmPass?.message}
      {...register('confirmPass')}
    >
      <div className="passord-wrap">
        <MaskedInput
          name="confirmPass"
          plain
          placeholder="Confirm password"
          type={confirmReveal ? 'text' : 'password'}
        />
        <Button
          icon={confirmReveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setConfirmReveal(!confirmReveal)}
        />
      </div>
    </FormField>
  );
};

ConfirmPassword.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default ConfirmPassword;
