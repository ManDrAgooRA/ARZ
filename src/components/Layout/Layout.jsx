import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
