import React from 'react';
import styled from 'styled-components';
import TitleContainer from '../../../../common/component/TitleContainer/TitleContainer';
import TestimonialElem from './component/TestimonialElem';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import Carousel from '../../../../../../../component/Carousel/Carousel';
import { useRef } from 'react';
import ArrowButton from '../../../../common/component/ArrowButton/ArrowButton';

const Testimonial = () => {
  const sliderRef = useRef();
  const theme = useTheme();
  var sizeStatus = useMediaQuery(theme.breakpoints.down('md'));
  const Testimonials = [
    {
      description:
        'We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs',
      img: 'data:image/jpeg;base64,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',
      name: 'Mr. JONE DEO',
      profession: 'Client',
    },
    {
      description:
        'We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs',
      img: 'data:image/jpeg;base64,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',
      name: 'Mr. JONE DEO',
      profession: 'Client',
    },
    {
      description:
        'We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs',
      img: 'data:image/jpeg;base64,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',
      name: 'Mr. JONE DEO',
      profession: 'Client',
    },
  ];
  return (
    <TestimonialContainer>
      <TitleContainer
        title="Testimonials about center"
        subTitle="We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs"
      />
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }} mt={5}>
        <Box sx={{ width: sizeStatus ? '95%' : '40%', backgroundColor: 'white' }}>
          <Carousel ref={sliderRef}>
            {Testimonials.map((item, index) => {
              return (
                <TestimonialElem
                  name={item.name}
                  profession={item.profession}
                  description={item.description}
                  img={item.img}
                  key={index}
                />
              );
            })}
          </Carousel>
        </Box>
      </Grid>
      <ArrowButton sliderRef={sliderRef} />
    </TestimonialContainer>
  );
};

export default Testimonial;

const TestimonialContainer = styled.div({});
