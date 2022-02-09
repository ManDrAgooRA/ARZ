import React, { FC } from 'react';
import { FormField, TextArea } from 'grommet';
import { IAdminInput } from '@/admin/interfaces';

export const DescriptionInput: FC<IAdminInput> = ({
  register,
  errorMessage,
}) => {
  return (
    <FormField
      label="Description"
      placeholder="Description"
      error={errorMessage}
      {...register('description')}
    >
      <TextArea name="description" placeholder="Description" />
    </FormField>
  );
};
