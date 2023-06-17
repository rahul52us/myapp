import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomButton from '../../../../../../../component/Button/Button';
import Typography from '../../../../../../../component/Typography/Typography';
import { Icon } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material';

const FlipServiceCard = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <CardInner elevation={0}>
      <CardWrapper flipped={flipped} onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
        <CardFront>
          <CardContent>
            <ImageContainer>
              <img src={item.front.img} alt="" />
            </ImageContainer>
            <FrontTitleContainer>
              <FrontTitle variant="h6">{item.front?.title}</FrontTitle>
            </FrontTitleContainer>
            <FrontSubTitleContainer>
              {item?.front?.subTitle?.map((item, index) => {
                return (
                  <FrontSubTitle key={index}>
                    <Icon>{item.icon}</Icon>
                    <FrontSubTitleText>{item.title}</FrontSubTitleText>
                  </FrontSubTitle>
                );
              })}
            </FrontSubTitleContainer>
          </CardContent>
          <FrontCardButton>
           <span> Learn More </span><ArrowRightAlt />
          </FrontCardButton>
        </CardFront>
        <CardBack>
          <CardContent>
            <ImageContainer>
              <img src={item.back.img} alt="" />
            </ImageContainer>
            <BackTitleContainer>
              Babies enjoy classrooms made for exploring with teachers who support today’s big
              milestones.
            </BackTitleContainer>
          </CardContent>
          <CustomButton variant="contained" style={{ marginLeft: '1rem', color: '#ffffff' }}>
            Learn More
          </CustomButton>
        </CardBack>
      </CardWrapper>
    </CardInner>
  );
};

FlipServiceCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FlipServiceCard;

const CardInner = styled(Card)`
  perspective: 1200px;
  position: relative;
  height: 550px;
  min-height: min-content !important;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
`;

const CardFront = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fffccf;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const FrontTitleContainer = styled.div`
  margin-top: 1rem;
`;

const FrontTitle = styled(Typography)`
  && {
    font-weight: 800;
  }
`;

const FrontSubTitleContainer = styled.div`
  margin-top: 0.8rem;
  margin-left: -0.3rem;
  color:#6b7385;
`;
const FrontSubTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  p {
    margin-left: 1rem;
    font-size: 1rem !important;
  }
`;

const FrontSubTitleText = styled(Typography)`
  && {
    font-size: 1rem;
  }
`;

const FrontCardButton = styled(CustomButton)`
  && {
    border: none;
    margin-left: 0.5rem;
    color:#000000;
    span
    {
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }
  }
`;

const CardBack = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: rotateY(180deg);
  background: linear-gradient(1turn, #e9dcfa, #d05aff);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const BackTitleContainer = styled.div`
  margin-top: 2rem;
  color: #ffffff;
  font-size: 1.1rem;
`;
