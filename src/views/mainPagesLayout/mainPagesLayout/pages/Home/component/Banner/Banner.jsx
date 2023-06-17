import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { useDeviceInfo } from '../../../../../../../component/CustomHooks/useDevice';
import CustomButton from '../../../../../../../component/Button/Button';

const fontSizes = {
  xs: {
    title: '3.6rem',
    subTitle: '1.2rem',
    titleMt: '1.2rem',
    padding: '4.5rem 1.5rem 1.5rem 1.5rem',
  },
  sm: {
    title: '3rem',
    subTitle: '1.4rem',
    titleMt: '1.4rem',
    padding: '4rem 1.5rem 1.5rem 1.5rem',
  },
  md: {
    title: '3.8rem',
    subTitle: '1.5rem',
    titleMt: '1.4rem',
    padding: '4.5rem 0.5rem 2.5rem 1.5rem',
  },
  lg: {
    title: '5rem',
    subTitle: '1.2rem',
    titleMt: '2.2rem',
    padding: '5.5rem 1.5rem 3rem 3rem',
  },
  xl: {
    title: '6rem',
    subTitle: '1.5rem',
    titleMt: '2.5rem',
    padding: '6rem 1.5rem 4.5rem 3rem',
  },
  xxl: {
    title: '8rem',
    subTitle: '1.8rem',
    titleMt: '2.8rem',
    padding: '8rem 1.5rem 4.5rem 7rem',
  },
};

const Banner = observer(() => {
  const { isLgDown, isXsScreen, isSmScreen, isMdScreen, isLgScreen, isXlScreen } = useDeviceInfo();

  const titleFontSize = isXsScreen
    ? fontSizes.xs
    : isSmScreen
    ? fontSizes.sm
    : isMdScreen
    ? fontSizes.md
    : isLgScreen
    ? fontSizes.lg
    : isXlScreen
    ? fontSizes.xl
    : fontSizes.xxl;

  return (
    <BannerContainer container>
      <BannerLeftItem item xxl={8} xl={8} lg={8} md={8} sm={12} xs={12} fontSize={titleFontSize}>
        <BannerLeftContainer size={isLgDown ? 'true' : null}>
          <BannerTitle fontSize={titleFontSize} size={isLgDown ? 'true' : null}>
            Stay curious.
          </BannerTitle>
          <BannerSubTitle fontSize={titleFontSize} size={isLgDown ? 'true' : null}>
            Discover stories, thinking, and expertise from writers on any topic.
          </BannerSubTitle>
          <BannerButton>Start Business</BannerButton>
        </BannerLeftContainer>
      </BannerLeftItem>
      <BannerRightContainer
        item
        xxl={4}
        xl={4}
        lg={4}
        md={4}
        sm={12}
        xs={12}
        size={isLgDown ? 'true' : 'false'}
      >
        <h1>Right Portions for the users</h1>
      </BannerRightContainer>
    </BannerContainer>
  );
});

export default Banner;

const BannerContainer = styled(Grid)`
  padding: 5px;
  /* height: 450px; */
  background-color: #ffc017;
`;

const BannerLeftItem = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BannerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
`;

const BannerTitle = styled.h1`
  font-size: ${(props) => props.fontSize.title};
  line-height: 0.8;
  font-weight: 500;
`;

const BannerSubTitle = styled.p`
  font-size: ${(props) => props.fontSize.subTitle};
  margin-top: 25px;
  width: 80%;
`;

const BannerButton = styled(CustomButton)`
  && {
    margin-top: 2rem;
    background-color: #000000;
    border-radius: 20px;
    padding: 0.4rem 1rem 0.4rem 1rem;
    color: white;
    :hover {
      background-color: #000000;
    }
  }
`;
const BannerRightContainer = styled(Grid)`
  width: 100%;
`;
