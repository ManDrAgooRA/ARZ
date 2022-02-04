import React, { FC } from 'react';
import { FormField, TextArea } from 'grommet';
import { IAdminInputs } from '@/admin/interfaces';

export const DescriptionInput: FC<IAdminInputs> = ({ register, errors }) => {
  return (
    <FormField
      label="Description"
      name="description"
      placeholder="Description"
      error={errors.description?.message}
      {...register('description')}
    >
      <TextArea name="description" placeholder="Description" />
    </FormField>
  );
};
