import React from 'react';
import { Grommet } from 'grommet';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import { THEME } from '../constants';
import { store } from '../store';
import Layout from '../components/Layout/Layout';
// import MainPage from '../pages/MainPage/MainPage';
import '../styles/style.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Grommet theme={THEME}>
        <Layout>
          <Routes />
        </Layout>
      </Grommet>
    </Provider>
  );
};

export default App;
