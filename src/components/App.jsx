import React from 'react';
import { Grommet } from 'grommet';
import AppBar from './AppBar/AppBar';
import theme from '../constants';
import './styles/style.scss';

const App = () => {
  return (
    <Grommet theme={theme}>
      <AppBar />
    </Grommet>
  );
};

export default App;
