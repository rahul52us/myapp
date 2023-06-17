import React, { useRef } from 'react';
import { IconButton } from '@mui/material';
import { SwipeLeftAlt, SwipeRightAlt } from '@mui/icons-material';
import Slide1 from '../../../../common/assets/images/slide1.jpg';
import Slide2 from '../../../../common/assets/images/slide2.jpg';
import Slide3 from '../../../../common/assets/images/slide3.jpg';
import Carousel from '../../../../../../../component/Carousel/Carousel';
import HomeSlideImage from './HomeSlideImage';

const HomeSlider = () => {
  const sliderRef = useRef(null);
  return (
    <div>
      <div style={{display:'none'}}>
        <IconButton onClick={sliderRef?.current?.slickPrev}>
          <SwipeLeftAlt />
        </IconButton>
        <IconButton onClick={sliderRef?.current?.slickNext}>
          <SwipeRightAlt />
        </IconButton>
      </div>
      <Carousel ref={sliderRef}>
        <HomeSlideImage image={Slide1}/>
        <HomeSlideImage image={Slide2}/>
        <HomeSlideImage image={Slide3}/>
      </Carousel>
    </div>
  );
};

export default HomeSlider;

