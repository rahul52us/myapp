import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import GroupImage from '../../../assests/banner-group-image.png';
import YoutubeImage from '../../../assests/youtube.png';
import CheckImage from '../../../assests/tick.png';
import AlphabetImage from '../../../assests/Alphabets.png';
import ArrowImage from '../../../assests/Arrow.png';
import { useDeviceInfo } from '../../../../../../component/CustomHooks/useDevice';

const BannerRight = () => {
  const { isMdDown } = useDeviceInfo();
  const containerRef = useRef(null);
  const maxMove = 20;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      const moveX = Math.max(-maxMove, Math.min(mouseX - centerX, maxMove));
      const moveY = Math.max(-maxMove, Math.min(mouseY - centerY, maxMove));

      container.style.setProperty('--moveX', `${moveX}px`);
      container.style.setProperty('--moveY', `${moveY}px`);
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BannerRightContainer ref={containerRef} isMdDown={isMdDown}>
      <img src={GroupImage} alt="" className="groupImage" />
      <div className="shape-image shape-youtube-img">
        <img src={YoutubeImage} alt="" />
      </div>
      <div className="shape-image shape-check-img">
        <img src={CheckImage} alt="" />
      </div>
      <div className="shape-image shape-alphabet-img">
        <img src={AlphabetImage} alt="" />
      </div>
      <div className="shape-image shape-arrow-img">
        <img src={ArrowImage} alt="" />
      </div>
    </BannerRightContainer>
  );
};

export default BannerRight;

const BannerRightContainer = styled.div`
  padding: 2rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .shape-image {
    width:${(props) => props.isMdDown ? '50px' : '75px'};
    height:${(props) => props.isMdDown ? '50px' : '75px'};
    transition: transform 0.5s ease;
  }
  .shape-check-img {
    position: absolute;
    bottom: 50px;
    left: 0;
  }
  .shape-alphabet-img {
    position: absolute;
    bottom: 50px;
    right: 80px;
  }
  .shape-youtube-img {
    position: absolute;
    top: 50px;
    left:${(props) => props.isMdDown ? '30px' : '140px'};
  }
  .shape-arrow-img {
    position: absolute;
    top: 50px;
    right:${(props) => props.isMdDown ? '10px' : '25px'};
  }

  &:hover .shape-image {
    transform: translate(var(--moveX), var(--moveY));
  }
`;
