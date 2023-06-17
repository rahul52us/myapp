import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../../../../../component/Typography/Typography';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const WelcomeImage = observer(({ img, title }) => {
  return (
    <WelcomeImageContainer>
      <ImageContainer>
        <img src={img} alt={img} style={{ borderRadius: '20px' }} />
      </ImageContainer>
      <TitleContainer>
        <Typography variant="h6">{title}</Typography>
      </TitleContainer>
    </WelcomeImageContainer>
  );
});

WelcomeImage.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};
export default WelcomeImage;

const WelcomeImageContainer = styled.div({
  backgroundColor: 'white',
  borderRadius: '10px',
  height: '260px',
});

const ImageContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  marginTop: '10px',
  img: {
    width: '220px',
    height: '100%',
  },
});

const TitleContainer = styled.div({
  marginTop: '20px',
  h6: {
    margin: '10px',
    fontSize: '18px',
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 1,
    cursor: 'pointer',
  },
});
