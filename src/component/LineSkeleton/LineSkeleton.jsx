import React from 'react';
import PropTypes from 'prop-types';

const CustomSkeleton = ({ style, className }) => {
  return <div className={`lineSkelaton ${className ? className : ''}`} style={style}></div>;
};

CustomSkeleton.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CustomSkeleton;
