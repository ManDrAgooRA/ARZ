import React from 'react';
import { Grommet } from 'grommet';
import { THEME } from '../constants';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';
import './styles/style.scss';

const App = () => {
  return (
    <Grommet theme={THEME}>
      <AppBar />
      <Footer />
    </Grommet>
  );
};

export default App;
