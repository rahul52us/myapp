import React from 'react';
import PropTypes from 'prop-types';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const Container = ({ children, containerWidth, ...rest }) => {
  const theme = useTheme();
  const statusSize = useMediaQuery(theme.breakpoints.down('xl'));
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }} {...rest}>
      <Box sx={{ width: statusSize ? '95%' : containerWidth ? containerWidth : '70%' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  containerWidth: PropTypes.string,
};
