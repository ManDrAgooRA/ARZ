import React from 'react';
import { Grommet } from 'grommet';
import { THEME } from '../constants';
import Layout from './Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';
import './styles/style.scss';

const App = () => {
  return (
    <Grommet theme={THEME}>
      <Layout>
        <MainPage />
      </Layout>
    </Grommet>
  );
};

export default App;
