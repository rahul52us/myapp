import React from 'react'
import { Typography  as CustomTypography } from '@mui/material'
import PropTypes from 'prop-types';


const Typography = ({children , ...rest}) => {
  return (
    <CustomTypography m={0} align='left' gutterBottom  {...rest}>
        {children}
    </CustomTypography>
  )
}

Typography.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Typography
