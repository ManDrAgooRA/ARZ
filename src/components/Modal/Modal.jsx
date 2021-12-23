import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Layer, Text } from 'grommet';

const Modal = ({ isOpen, message, handleClose }) => {
  return (
    <Box>
      {isOpen && (
        <Layer
          id="hello world"
          position="center"
          onClickOutside={handleClose}
          onEsc={handleClose}
        >
          <Box pad="medium" gap="small" width="medium">
            <Heading level={3} margin="none">
              Oooops
            </Heading>
            <Text>{message}</Text>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button
                label={
                  <Text color="white">
                    <strong>close</strong>
                  </Text>
                }
                onClick={handleClose}
                primary
                color="status-critical"
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  handleClose: PropTypes.func,
};

export default Modal;
