import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { IAdminInputs } from '@/admin/interfaces';

export const TitleInput: FC<IAdminInputs> = ({ register, errors }) => {
  return (
    <FormField
      label="Title"
      name="title"
      placeholder="user name"
      error={errors.title?.message}
      {...register('title')}
    >
      <MaskedInput name="title" placeholder="Title" />
    </FormField>
  );
};
