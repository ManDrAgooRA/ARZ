import React, { FC } from 'react';
import { Box } from 'grommet';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';

const schema = yup.object({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  dateOfBirthDay: yup.string().required(),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPass: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  role: yup.string().required(),
});

export const AdminUserForm: FC<IAdminForm> = ({ currentForm, userId }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        <button type="submit">
          {currentForm === 'edit' ? 'Edit user' : 'Add user'}
        </button>
      </form>
    </Box>
  );
};
