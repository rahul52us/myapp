import React, { useRef } from 'react';
import Container from '../../../../../component/common/Container/Container';
import TestimonialArrowIcon from '../../assests/testimonialArrowIcon.svg';
import TestimonialCard from './element/TestimonialCard';
import ComponentTitle from '../common/component/ComponentTitle';
import Carousel from '../../../../../component/Carousel/Carousel';
import { useDeviceInfo } from '../../../../../component/CustomHooks/useDevice';

const Testimonial = () => {
  const {isXlDown} = useDeviceInfo()
  const sliderRef = useRef(null);

  return (
    <Container style={{ marginTop: '3rem' }}>
      <ComponentTitle title="EDUCATION FOR EVERYONE" subTitle="No joking - here’s the proof!" />
      <Carousel ref={sliderRef} slidesToShow={isXlDown ? 1 : 3} style={{overflow:'hidden'}}>
          <TestimonialCard img={TestimonialArrowIcon} userImage={"https://rainbowit.net/html/histudy/assets/images/testimonial/client-04.png"}/>
          <TestimonialCard img={TestimonialArrowIcon} userImage={"https://rainbowit.net/html/histudy/assets/images/testimonial/client-03.png"}/>
          <TestimonialCard img={TestimonialArrowIcon} userImage={"https://rainbowit.net/html/histudy/assets/images/testimonial/client-06.png"}/>
          <TestimonialCard img={TestimonialArrowIcon} />
          <TestimonialCard img={TestimonialArrowIcon} userImage={"https://rainbowit.net/html/histudy/assets/images/testimonial/client-03.png"}/>
          <TestimonialCard img={TestimonialArrowIcon} />
          <TestimonialCard img={TestimonialArrowIcon} userImage={"https://rainbowit.net/html/histudy/assets/images/testimonial/client-05.png"}/>
          <TestimonialCard img={TestimonialArrowIcon} />
          <TestimonialCard img={TestimonialArrowIcon} userImage={"https://rainbowit.net/html/histudy/assets/images/testimonial/client-06.png"}/>
      </Carousel>
    </Container>
  );
};

export default Testimonial;
