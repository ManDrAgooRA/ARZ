import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { ICustomInput } from '@/interfaces';

export const CastomInput: FC<ICustomInput> = ({
  label,
  name,
  placeholder,
  errorMessage,
  register,
  icon,
  mask,
}) => {
  return (
    <FormField
      label={label}
      name={name}
      placeholder={placeholder}
      error={errorMessage}
      {...register(`${name}`)}
    >
      <MaskedInput
        name={name}
        placeholder={placeholder}
        icon={icon}
        mask={mask}
      />
    </FormField>
  );
};
