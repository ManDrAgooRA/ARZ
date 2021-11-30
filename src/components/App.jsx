import React from 'react';
import { Grommet } from 'grommet';
import AppBar from './Header/AppBar';
import './styles/style.scss';

const App = () => {
  const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
      colors: {
        focus: 'light-1',
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <AppBar />
    </Grommet>
  );
};

export default App;
