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
import { addUser, editUserData } from '@/user/store/thunks';
import { adminAllUserSelector } from '@/user/store/selectors';
import { EmailInput } from '@/user/components/EmailInput/EmailInput';
import { PasswordInput } from '@/user/components/PasswordInput/PasswordInput';
import { RoleInput } from '@/admin/components/AdminUserForm/inputs/RoleInput';
import { changeAdminModalState } from '@/user/store/actions';
import { signUpValidationSchema } from '@/utils/validations';
import { getDefaultUserValues } from '@/admin/utlis';
import { IUser } from '@/interfaces';
import { IAdminForm } from '@/admin/interfaces';

export const AdminUserForm: FC<IAdminForm> = ({ currentForm, userId }) => {
  const allUser = useSelector(adminAllUserSelector);
  const [role, setRole] = useState(
    currentForm === 'edit' ? allUser[userId || 0].role : 'user'
  );
  const [dateValue, setDateValue] = useState(
    currentForm === 'edit' ? allUser[userId || 0].dateOfBirthDay : ''
  );

  const dispatch = useDispatch();
  const defaultValue = getDefaultUserValues(currentForm, allUser, userId || 0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: defaultValue?.userName,
      phone: defaultValue?.phone,
      dateOfBirthDay: defaultValue?.dateOfBirthDay,
      email: defaultValue?.email,
      password: '',
      confirmPass: '',
      role: defaultValue?.role,
    },
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmit = (data: IUser) => {
    const user = { ...data, role, cart: [] };
    if (currentForm === 'add') {
      dispatch(addUser({ requestBody: user }));
    } else {
      dispatch(editUserData({ id: userId, requestBody: user }));
    }
    dispatch(changeAdminModalState(false));
    reset();
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
          dateValue={dateValue}
          setDateValue={setDateValue}
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
