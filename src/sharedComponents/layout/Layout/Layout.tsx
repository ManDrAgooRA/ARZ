import React, { FC, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '@/sharedComponents/layout/AppBar/AppBar';
import { STRIPE_PUBCLICK_KEY } from '@/constants';
import { Footer } from '@/sharedComponents/layout/Footer/Footer';
import { ILayout } from '@/interfaces/ILayout';
import { Modal } from '@/sharedComponents/Modal/Modal';
import {
  changeModalState,
  changeSinUpStatus,
  clearCart,
} from '@/user/store/actions';
import {
  errorMessageSelector,
  modalStateSeletor,
} from '@/user/store/selectors';
import './layout.scss';

const stripePromise = loadStripe(STRIPE_PUBCLICK_KEY);

export const Layout: FC<ILayout> = ({ children }) => {
  const error = useSelector(errorMessageSelector);
  const isOpenModal = useSelector(modalStateSeletor);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeModalState(false));
  };

  // useEffect(() => {
  //   localStorage.clear();
  //   dispatch(clearCart());
  //   dispatch(changeSinUpStatus(false));
  // }, []);

  return (
    <>
      <AppBar />
      <div className="layout">
        <Modal isOpen={isOpenModal} message={error} handleClose={handleClose} />
        <Elements stripe={stripePromise}>{children}</Elements>
      </div>
      <Footer />
    </>
  );
};
