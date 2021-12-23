import React from 'react';
import { Grommet } from 'grommet';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from '../routes/Routes';
import { THEME } from '../constants';
import { store, persistor } from '../store';
import Layout from '../components/Layout/Layout';
import '../styles/style.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Grommet theme={THEME}>
        <BrowserRouter>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Routes />
            </Layout>
          </PersistGate>
        </BrowserRouter>
      </Grommet>
    </Provider>
  );
};

export default App;
