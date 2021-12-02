import React from 'react';
import { Grommet } from 'grommet';
import { THEME } from '../constants';
// import AppBar from './AppBar/AppBar';
// import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import Layout from './Layout/Layout';
import './styles/style.scss';

const App = () => {
  return (
    <Grommet theme={THEME}>
      <Layout>
        <Sidebar />
      </Layout>
    </Grommet>
  );
};

export default App;
