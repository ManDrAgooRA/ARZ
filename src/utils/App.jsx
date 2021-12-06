import React from 'react';
import { Grommet } from 'grommet';
import { Provider } from 'react-redux';
import { THEME } from '../constants';
import { store } from '../store';
import Layout from '../components/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';
import '../styles/style.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Grommet theme={THEME}>
        <Layout>
          <MainPage />
        </Layout>
      </Grommet>
    </Provider>
  );
};

export default App;
