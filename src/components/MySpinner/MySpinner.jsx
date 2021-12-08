import React from 'react';
import { Box, Spinner, Text } from 'grommet';
import './mySpinner.scss';

export const MySpinner = () => {
  return (
    <Box
      align="center"
      direction="row"
      gap="small"
      pad="small"
      key="large"
      className="spinner-wrap"
    >
      <Spinner size="large" />
      <Text size="large" />
    </Box>
  );
};
