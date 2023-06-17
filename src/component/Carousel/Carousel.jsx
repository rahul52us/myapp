import React, { useRef } from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Proptypes from 'prop-types';


const Carousel = React.forwardRef(({style, children , ...rest}, ref) => {
    let customRef = useRef()
    var settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
      adaptiveHeight: true,
      ...rest
    };

    customRef = ref || customRef

    return (
      <Slider ref={customRef} {...settings} style={style}>
        {children}
      </Slider>
    );
  })

Carousel.displayName = 'Carousel'

Carousel.propTypes = {
  children: Proptypes.node.isRequired,
  style: Proptypes.any
};

export default Carousel;
