import React from 'react';
import { Heading } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/thunks/auth';
import { signUp } from '../../BusinessLogic';
import PhoneInput from './Inputs/PhoneInput';
import DateInput from './Inputs/DateInput';
import UserNameInput from '../../components/UserNameInput/UserNameInput';
import EmailInput from './Inputs/EmailInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import ConfirmPassword from './Inputs/ConfirmPassword';
import './signUp.scss';

const schema = yup
  .object({
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
  })
  .required();

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    signUp({ requestBody: data });
    dispatch(fetchLogin({ requestBody: data }));
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

export default SignUp;
