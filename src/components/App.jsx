import React from 'react';
import { Grommet } from 'grommet';
import { THEME } from '../constants';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import './styles/style.scss';

const App = () => {
  return (
    <Grommet theme={THEME}>
      <AppBar />
      <Sidebar />
      <Footer />
    </Grommet>
  );
};

export default App;
