import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SliderBg from '../../../../common/assets/images/slide-bg.png';
import { useMediaQuery, useTheme } from '@mui/material';
import Typography from '../../../../../../../component/Typography/Typography';
import Button from '../../../../../../../component/Button/Button';

const HomeSlideImage = ({ image }) => {
  const theme = useTheme();
  var sizeStatus = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <SliderContainer image={image} SliderBg={SliderBg} sizeStatus={sizeStatus}>
        <img src={image} alt="" />
        <SliderContent sizeStatus={sizeStatus}>
          <Typography
            variant="h2"
            style={{ fontSize: sizeStatus ? '15px' : '50px', color: '#3d56f0', fontWeight: '500' }}
          >
            Children Academy First ReseaArchers
          </Typography>
          <Typography
            style={{ fontSize: sizeStatus ? '10px' : '24px', fontWeight: '600' }}
            mt={sizeStatus ? 0.5 : 2}
          >
            {`Children's Academy will provide a stimulating and safe environment for children ages three month`}
          </Typography>
          <Button>Click Me</Button>
        </SliderContent>
      </SliderContainer>
    </>
  );
};

export default HomeSlideImage;

HomeSlideImage.propTypes = {
  image: PropTypes.string.isRequired,
};

const SliderContainer = styled.div({
  maskImage: (props) => (props.sizeStatus ? '' : `url(${props.SliderBg})`),
  maskSize: 'auto 100%',
  maskPosition: 'center center',
  maskRepeat: 'no-repeat',
  position: 'relative',
  img: {
    width: '100%',
    height: '100%',
  },
});

const SliderContent = styled.div({
  position: 'absolute',
  fontSize: '12px',
  width: (props) => (props.sizeStatus ? '50%' : '30%'),
  top: (props) => (props.sizeStatus ? '15%' : '25%'),
  left: (props) => (props.sizeStatus ? '5%' : '15%'),
});
