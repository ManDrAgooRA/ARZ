import React, { FC } from 'react';
import { Footer } from '../Footer/Footer';
import { AppBar } from '../AppBar/AppBar';
import { ILayout } from '../../interfaces/ILayout';
import './layout.scss';

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <AppBar />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
};
