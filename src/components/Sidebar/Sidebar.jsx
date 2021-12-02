import React from 'react';
import { Box, Sidebar } from 'grommet';

const MeSydebar = () => {
  return (
    <Box direction="row" full>
      <Sidebar
        responsive={false}
        background="light-3"
        full="vertical"
        pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
        style={{ width: '100%', height: '100vh' }}
      >
        <span>sidebar</span>
      </Sidebar>
    </Box>
  );
};

export default MeSydebar;
