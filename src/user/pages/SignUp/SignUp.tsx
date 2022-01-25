import React, { FC } from 'react';
import { Heading } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignUp } from '@/user/store/thunks/auth';
import { PhoneInput } from './Inputs/PhoneInput';
import { DateInput } from './Inputs/DateInput';
import { UserNameInput } from './Inputs/UserNameInput';
import { EmailInput } from '@/user/components/EmailInput/EmailInput';
import { PasswordInput } from '@/user/components/PasswordInput/PasswordInput';
import { ConfirmPassword } from './Inputs/ConfirmPassword';
import { signUpValidationSchema } from '@/utils/validations';
import { IUser } from '@/interfaces';
import './signUp.scss';

export const SignUp: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
  });

  const handleNavigate = () => {
    navigate('/');
  };

  const onSubmit = (data: IUser) => {
    dispatch(
      fetchSignUp({ requestBody: { ...data, role: 'user' }, handleNavigate })
    );
    reset();
  };

  return (
    <div className="container">
      <Heading level={2}>SignUp</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <UserNameInput register={register} errors={errors} />
        <PhoneInput register={register} errors={errors} />
        <DateInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <ConfirmPassword register={register} errors={errors} />
        <button type="submit" className="btn btn-form">
          SignUp
        </button>
      </form>
    </div>
  );
};
