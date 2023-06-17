import React from 'react';
import TitleContainer from '../../common/component/TitleContainer/TitleContainer';
import styled from 'styled-components';
import AboutImage1 from '../../common/assets/images/aboutImage1.jpg';
import { Grid } from '@mui/material';
import { backgroundCoverImage2 } from '../../common/assets/images/backgroundImageCover2';
import Container from '../../common/component/Container/Container';
import InfoElem from './element/InfoElem';

const InfoContainer = () => {
  return (
    <>
      <TitleContainer
        title="Welcome To Umang Academy"
        subTitle="The concept of school and pre-school education consists of 3 programs of development and training in our academy."
      />
      <Container
        style={{ background: `url(${backgroundCoverImage2})`, backgroundPosition: 'center center' }}
      >
        <Grid container spacing={3} mt={3}>
          <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
            <InfoElem
              title="Active Learning"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.."
              order={0}
            />
            <InfoElem
              title="Expert Teachers"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.."
              order={0}
            />
          </Grid>
          <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
            <ImageContainer>
              <img src={AboutImage1} alt="" />
            </ImageContainer>
          </Grid>
          <Grid item xl={4} xxl={4} md={4} sm={12} xs={12}>
            <InfoElem
              title="Strategi Location"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.."
              order={0}
            />
            <InfoElem
              title="Full Day Programs"
              description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.."
              order={0}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InfoContainer;

const ImageContainer = styled.div({
  width: '100%',
  height: '100%',
  img: {
    width: '100%',
    height: '100%',
  },
});
