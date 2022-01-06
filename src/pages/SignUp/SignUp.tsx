import React, { FC, useState } from 'react';
import { Heading } from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSignUp } from '@/store/thunks/auth';
import { PhoneInput } from './Inputs/PhoneInput';
import { DateInput } from './Inputs/DateInput';
import { UserNameInput } from './Inputs/UserNameInput';
import { EmailInput } from '@/components/EmailInput/EmailInput';
import { PasswordInput } from '@/components/PasswordInput/PasswordInput';
import { ConfirmPassword } from './Inputs/ConfirmPassword';
import { Modal } from '@/components/Modal/Modal';
import { signUpValidationSchema } from '@/utils/validations';
import { authError } from '@/store/selectors/auth';
import { IUser } from '@/interfaces';
import './signUp.scss';

export const SignUp: FC = () => {
  const error = useSelector(authError);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

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
    dispatch(fetchSignUp({ requestBody: data, handleNavigate, handleOpen }));
    reset();
  };

  return (
    <div className="container">
      <Modal isOpen={isOpenModal} message={error} handleClose={handleClose} />
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
