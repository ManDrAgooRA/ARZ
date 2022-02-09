import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInput } from '@/admin/interfaces';

export const TitleInput: FC<IAdminInput> = ({ register, errorMessage }) => {
  return (
    <FormField
      label="Title"
      placeholder="Title"
      error={errorMessage}
      {...register('title')}
    >
      <MaskedInput name="title" placeholder="Title" />
    </FormField>
  );
};
