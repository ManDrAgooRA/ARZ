import React, { FC, useState } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { Calendar } from 'grommet-icons';
import { getDateMask } from '@/user/pages/SignUp/masks';
import { IInput } from '@/interfaces';

export const DateInput: FC<IInput> = ({ register, errorMessage }) => {
  const [value, setValue] = useState('');

  return (
    <FormField
      label="Date of birthday"
      name="dateOfBirthDay"
      error={errorMessage}
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
