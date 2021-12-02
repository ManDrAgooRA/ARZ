import React from 'react';
import { Box, Sidebar } from 'grommet';

const MeSydebar = () => {
  return (
    <Box direction="row" height={{ min: '100vh' }} full>
      <Sidebar
        responsive={false}
        background="light-3"
        full="vertical"
        pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
      >
        <span>sidebar</span>
      </Sidebar>
    </Box>
  );
};

export default MeSydebar;
