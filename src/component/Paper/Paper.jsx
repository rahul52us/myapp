import { Paper } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const CustomPaper = ({ children , ...rest}) => {
  return <Paper
  {...rest}>{children}</Paper>;
};

CustomPaper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomPaper;
