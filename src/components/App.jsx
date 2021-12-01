import React from 'react';
import { Grommet } from 'grommet';
import AppBar from './AppBar/AppBar';
import { THEME } from '../constants';
import './styles/style.scss';

const App = () => {
  return (
    <Grommet theme={THEME}>
      <AppBar />
    </Grommet>
  );
};

export default App;
