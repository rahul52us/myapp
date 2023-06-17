import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button color="primary" {...rest}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomButton;
