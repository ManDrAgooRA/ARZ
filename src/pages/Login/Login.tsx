import React, { FC, useState } from 'react';
import { Heading } from 'grommet';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/Modal/Modal';
import { authError } from '../../store/selectors/auth';
import { PasswordInput } from '../../components/PasswordInput/PasswordInput';
import { EmailInput } from '../../components/EmailInput/EmailInput';
import { fetchLogin } from '../../store/thunks/auth';
import { loginValidationSchema } from '../../utils/validations';

export const Login: FC = () => {
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
    resolver: yupResolver(loginValidationSchema),
  });

  const handleNavigate = () => {
    navigate('/');
  };

  const onSubmit = (data) => {
    dispatch(fetchLogin({ requestBody: data, handleNavigate, handleOpen }));
    reset();
  };

  return (
    <div className="container">
      <Modal isOpen={isOpenModal} message={error} handleClose={handleClose} />
      <Heading level={2}>Login</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button type="submit" className="btn btn-form">
          Login
        </button>
      </form>
    </div>
  );
};
