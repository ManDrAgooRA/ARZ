import React, { FC } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '@/components/AppBar/AppBar';
import { STRIPE_PUBCLICK_KEY } from '@/constants';
import { Footer } from '@/components/Footer/Footer';
import { ILayout } from '@/interfaces/ILayout';
import { Modal } from '../Modal/Modal';
import { changeModalState } from '@/store/actions';
import { errorMessageSelector, modalStateSeletor } from '@/store/selectors';
import './layout.scss';

const stripePromise = loadStripe(STRIPE_PUBCLICK_KEY);

export const Layout: FC<ILayout> = ({ children }) => {
  const error = useSelector(errorMessageSelector);
  const isOpenModal = useSelector(modalStateSeletor);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeModalState(false));
  };

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
