import React, { FC } from 'react';
import { AppBar } from '@/components/AppBar/AppBar';
import { Footer } from '@/components/Footer/Footer';
import { ILayout } from '@/interfaces/ILayout';
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
