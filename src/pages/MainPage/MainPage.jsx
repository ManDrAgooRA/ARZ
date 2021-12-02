import React from 'react';
import { Box, Grid } from 'grommet';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductList from '../../components/ProductList/ProductList';

const MainPage = () => {
  return (
    <Grid
      rows={['xsmall', 'large']}
      columns={['1/4', 'flex']}
      areas={[
        ['sidebar', 'main'],
        ['footer', 'footer'],
      ]}
      gap="small"
      height={{ min: '100vh' }}
    >
      <ProductList gredArea="main" />
      <Box background="light-5" gridArea="sidebar">
        <Sidebar gredArea="sidebar" />
      </Box>

      {/* <Box background="light-2" gridArea="main">
        Main
      </Box> */}
    </Grid>
  );
};

export default MainPage;
