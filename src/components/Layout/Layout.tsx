import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '@/components/AppBar/AppBar';
import { Footer } from '@/components/Footer/Footer';
import { ILayout } from '@/interfaces/ILayout';
import { changeModalState } from '@/store/actions';
import {
  errorMessageSelector,
  errorModalStateSeletor,
} from '@/store/selectors';
import { Modal } from '@/components/Modal/Modal';
import './layout.scss';

export const Layout: FC<ILayout> = ({ children }) => {
  const error = useSelector(errorMessageSelector);
  const isOpenModal = useSelector(errorModalStateSeletor);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(changeModalState(false));
  };

  return (
    <>
      <AppBar />
      <Modal isOpen={isOpenModal} message={error} handleClose={handleClose} />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
};
