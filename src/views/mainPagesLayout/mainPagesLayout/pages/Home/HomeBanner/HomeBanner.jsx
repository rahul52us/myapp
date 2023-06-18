import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useDeviceInfo } from '../../../../../../component/CustomHooks/useDevice';
import BannerRight from './BannerRight';
import BannerImage from '../../../assests/HomeBackground.png';
import BannerShapeRight from '../../../assests/homeShapeRight.png';
import BannerLeft from './BannerLeft';
import HomeShapeLeft from '../../../assests/HomeShapeLeft.png';
import HomeShapeBottom from '../../../assests/download.svg';
import BannerTop from '../../../assests/bannerTop.png';
import BannerService from './BannerService';

const HomeBanner = observer(() => {
  const { isMdDown } = useDeviceInfo();

  return (
    <HomeBannerContainer container image={BannerImage} sx={{display:'flex',justifyContent:'space-around'}}>
      <HomeBannerLeft
        item
        md={12}
        xl={7}
        xll={6}
        sm={12}
        xs={12}
        backgroundImg={BannerTop}
        size={isMdDown}
      >
        <BannerLeft />
      </HomeBannerLeft>
      <HomeBannerRight item md={12} xl={5} xll={6} sm={12} xs={12} size={isMdDown}>
        <BannerRight />
      </HomeBannerRight>
      <HomeBannerRight item md={12} xl={12} xll={12} sm={12} xs={12}>
        <BannerService />
      </HomeBannerRight>
      <HomeBannerShapeImage isMdDown={isMdDown}>
        <div className="shape-image-left">
          <img src={HomeShapeLeft} alt="" />
        </div>
        <div className="shape-image-right">
          <img src="" alt="" />
        </div>
        <div className="shape-image-top">
          <img src="" alt="" />
        </div>
        <div className="shape-bottom-image">
          <img src={HomeShapeBottom} alt="" />
        </div>
      </HomeBannerShapeImage>
    </HomeBannerContainer>
  );
});

export default HomeBanner;

const HomeBannerContainer = styled(Grid)`
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  && {
    background-repeat: no-repeat;
    background-color: #ffffff;
    background-image: url(${(props) => props.image});
    background-size: cover;
  }
`;

const HomeBannerLeft = styled(Grid)`
  background: ${(props) => (!props.size ? `url(${props.backgroundImg})` : '')};
  background-repeat: no-repeat;
  object-fit: cover;
  max-width: 100%;
  margin-top: ${(props) => (props.size ? '3rem' : '')} !important;
`;

const HomeBannerRight = styled(Grid)`
  background-image: url(${BannerShapeRight});
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
  margin-top: ${(props) => (props.size ? '0.1rem' : '3rem')} !important;
`;

const HomeBannerShapeImage = styled.div`
  && {
    .shape-image-left {
      position: absolute;
      left: -480px;
      bottom: 70px;
      z-index: 1;
      img {
        height: auto;
        width: 100%;
        object-fit: cover;
        z-index: 1;
      }
    }
    .shape-bottom-image {
      position: absolute;
      bottom: ${(props) => (props.isMdDown ? '-10px' : '-50px')};
      left: 0;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
