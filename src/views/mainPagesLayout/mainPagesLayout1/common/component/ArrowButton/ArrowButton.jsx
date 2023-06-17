import React from 'react';
import { Arrow } from '../../assets/images/arrow';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types'

const ArrowButton = ({sliderRef}) => {
  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }} mt={2}>
      <ArrowLeftButton Arrow={Arrow} onClick={sliderRef?.current?.slickPrev}></ArrowLeftButton>
      <ArrowRightButton Arrow={Arrow} onClick={sliderRef?.current?.slickNext}></ArrowRightButton>
    </Grid>
  );
};

ArrowButton.propTypes = {
    sliderRef : PropTypes.any
}

export default ArrowButton;
const CommonArrowBtn = styled.div({
  padding: '5px 8px',
  marginLeft: '5px',
  marginRight: '5px',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  backgroundSize: 'cover',
  transition: 'all .5s ease',
  backgroundImage: (props) => `url(${props.Arrow})`,
  backgroundColor: 'transparent',
  border: '0 solid hsla(0,0%,100%,.95)',
});

const ArrowLeftButton = styled(CommonArrowBtn)({
  backgroundPosition: '-53px 0',
  '&:hover': {
    backgroundPosition: '0 0',
  },
});

const ArrowRightButton = styled(CommonArrowBtn)({
  backgroundPosition: '-105px 0',
  '&:hover': {
    backgroundPosition: '-155px 0',
  },
});
