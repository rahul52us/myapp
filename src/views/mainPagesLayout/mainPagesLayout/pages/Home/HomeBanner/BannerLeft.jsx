import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '../../../../../../component/Typography/Typography';
import { observer } from 'mobx-react-lite';
import { useDeviceInfo } from '../../../../../../component/CustomHooks/useDevice';
import StarIcon from '@mui/icons-material/Star';
import { BookOnline } from '@mui/icons-material';

const textOptions = ['for University', 'for College', 'for Coaching', 'for Gym', 'for High School'];

const BannerLeft = observer(() => {
  const { isXlDown } = useDeviceInfo();
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BannerLeftContainer isXlDown={isXlDown}>
      <BannerLeftTopContainer isXlDown={isXlDown}>
        <StarIconContainer>
          <>
            <StarIcon sx={{ color: '#FF8F3C' }} />
            <StarIcon sx={{ color: '#FF8F3C' }} />
            <StarIcon sx={{ color: '#FF8F3C' }} />
            <StarIcon sx={{ color: '#FF8F3C' }} />
            <StarIcon sx={{ color: '#FF8F3C' }} />
          </>
          <Typography variant="h6">12500+ TRUST CUSTOMER</Typography>
        </StarIconContainer>
        <StarRightContainer>
          <BookOnline sx={{ color: '#FF8F3C' }} />
          <Typography variant="h6">ENVATO ELITE AUTHOR</Typography>
        </StarRightContainer>
      </BannerLeftTopContainer>
      <TitleContainer isXlDown={isXlDown}>
        <Typography variant="h3">Have your dream site in minutes</Typography>
        <Typography variant="h3">{textOptions[textIndex]}</Typography>
        <Typography variant="h6">the most powerful yet the easiest template ever.</Typography>
      </TitleContainer>
    </BannerLeftContainer>
  );
});

export default BannerLeft;

const BannerLeftContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isXlDown ? 'center' : 'center')};
  flex-direction: column;
  position: relative;
  z-index: 11;
  margin-top: ${(props) => (props.isXlDown ? '1rem' : '12rem')};
  margin-left: ${(props) => (props.isXlDown ? '1rem' : '8rem')};
`;

const BannerLeftTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: ${(props) => (props.isXlDown ? '90%' : '70%')};
  h6 {
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 0.3rem;
    font-size: ${(props) => (props.isXlDown ? '0.7rem' : '1rem')} !important;
  }
`;

const StarIconContainer = styled.div``;
const StarRightContainer = styled.div``;
const TitleContainer = styled.div`
  width: ${(props) => (props.isXlDown ? '90%' : '70%')};
  h3 {
    font-weight: 800;
    font-size: ${(props) => (props.isXlDown ? '1rem' : '4rem')} !important;
  }
  h6 {
    font-size: ${(props) => (props.isXlDown ? '0.8rem' : '1.1rem')} !important;
    margin-top: 0.5rem;
  }
`;
