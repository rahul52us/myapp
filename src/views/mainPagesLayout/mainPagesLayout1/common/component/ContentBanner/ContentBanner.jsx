import React from 'react';
import BackendPattern from '../../assets/images/patternBackground.jpg';
import { BackgroundSkyAnimation } from '../../assets/images/backgroundSkyAnimation';
import styled from 'styled-components';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Typography from '../../../../../../component/Typography/Typography';
import Breadcrumbs from '../../../../../../component/Breadcrumb/Breadcrumb';
import PropTypes from 'prop-types';

const ContentBannner = ({ title }) => {
  const theme = useTheme();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AboutContainer>
      <BackImageContainer>
        <Box sx={{ display: 'grid', placeContent: 'center', height: '100%' }}>
          <ContentContainer sizeStatus={sizeStatus}>
            <Typography variant="h2" sx={{ textAlign: 'center' , color:'#ffffff' , fontSize: sizeStatus ? '30px' : '45px' }}>
              {title}
            </Typography>
            <Breadcrumbs
              data={[{ link: '/', title: 'Home' }, { title: title }]}
              color="white"
              fontSize="18px"
              display="flex"
              justifyContent="center"
            />
          </ContentContainer>
        </Box>
        <AniminateSkyImage sizeStatus={sizeStatus} />
      </BackImageContainer>
    </AboutContainer>
  );
};

ContentBannner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentBannner;

const AboutContainer = styled.div({
  img: {
    width: '100%',
    height: '100%',
  },
});

const BackImageContainer = styled.div({
  width: '100%',
  height: '300px',
  background: `url(${BackendPattern})`,
  position: 'relative',
});

const ContentContainer = styled.div({});

const AniminateSkyImage = styled.div({
  background: `url(${BackgroundSkyAnimation})`,
  height: (props) => (props.sizeStatus ? '40px' : '80px'),
  width: '100%',
  position: 'absolute',
  bottom: 0,
});
