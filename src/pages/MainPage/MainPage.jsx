import React from 'react';
import { Grommet, Grid, ResponsiveContext } from 'grommet';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductList from '../../components/ProductList/ProductList';
import './mainPage.scss';

const MainPage = () => {
  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns={size !== 'small' ? ['1/4', 'flex'] : ['full']}
            gap="small"
            className="main"
          >
            <Sidebar />
            <ProductList />
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};

export default MainPage;
