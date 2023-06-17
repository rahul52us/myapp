import React from 'react';
import { Tooltip as CustomToolTip } from '@mui/material';
import PropTypes from 'prop-types';

const Tooltip = ({ title, children, ...rest }) => {
  return <CustomToolTip title={title} {...rest}>{children}</CustomToolTip>;
};

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Tooltip;
