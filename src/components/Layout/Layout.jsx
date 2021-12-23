import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../Footer/Footer';
import { AppBar } from '../AppBar/AppBar';
import './layout.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};
