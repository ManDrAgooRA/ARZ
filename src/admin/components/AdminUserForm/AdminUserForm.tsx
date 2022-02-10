import React, { FC, useState } from 'react';
import { Box } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  DateInput,
  ConfirmPassword,
  PhoneInput,
  UserNameInput,
} from '@/user/pages/SignUp/Inputs';
import { addUser } from '@/user/store/thunks';
import { adminAllUserSelector } from '@/user/store/selectors';
import { EmailInput } from '@/user/components/EmailInput/EmailInput';
import { PasswordInput } from '@/user/components/PasswordInput/PasswordInput';
import { RoleInput } from '@/admin/components/AdminUserForm/inputs/RoleInput';
import { signUpValidationSchema } from '@/utils/validations';
import { IUser } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';

export const AdminUserForm: FC<IAdminForm> = ({ currentForm, userId }) => {
  const allUser = useSelector(adminAllUserSelector);
  const [role, setRole] = useState(
    currentForm === 'edit' ? allUser[userId || 0].role : 'user'
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });
  const onSubmit = (data: IUser) => {
    const user = { ...data, role, cart: [] };
    if (currentForm === 'add') {
      dispatch(addUser({ requestBody: user }));
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        <UserNameInput
          register={register}
          errorMessage={errors.userName?.message}
        />
        <PhoneInput register={register} errorMessage={errors.phone?.message} />
        <DateInput
          register={register}
          errorMessage={errors.dateOfBirthDay?.message}
        />
        <EmailInput register={register} errorMessage={errors.email?.message} />
        <PasswordInput
          register={register}
          errorMessage={errors.password?.message}
        />
        <ConfirmPassword
          register={register}
          errorMessage={errors.confirmPass?.message}
        />
        <RoleInput
          register={register}
          errorMessage={errors.role?.message}
          role={role}
          setRole={setRole}
        />
        <button type="submit" className="btn btn-form">
          {currentForm === 'edit' ? 'Edit user' : 'Add user'}
        </button>
      </form>
    </Box>
  );
};
