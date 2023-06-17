import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { headerHeight, smallSizeHeaderHeight } from '../config/constant';
import Container from '../../../../../component/common/Container/Container';
import { Link, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import CustomButton from '../../../../../component/Button/Button';
import { observer } from 'mobx-react-lite';
import { useDeviceInfo } from '../../../../../component/CustomHooks/useDevice';
import { authRoute } from '../../../../routes/authenticate_constant_route';

const HeaderLayout = observer(() => {
  const location = useLocation();
  const { isMdDown } = useDeviceInfo();
  const [buttonColor, setButtonColor] = useState({
    backgroundColor: '',
    showBackground: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const midScreen = 60;

      setButtonColor(() => {
        if (scrollPosition > midScreen) {
          return {
            color: 'blue',
            backgroundColor: 'white',
            showBackground: true,
          };
        } else {
          return {
            color: '',
            backgroundColor: '',
            showBackground: false,
          };
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderMainContainer
      smallSizeContentWidth={'100%'}
      buttonColor={buttonColor}
      location={location}
    >
      <HeaderContainer container size={isMdDown ? 'true' : null}>
        <HeaderLeft item xl={6} xxl={8} md={5}>
          <img src="https://rainbowit.net/html/histudy/assets/images/logo/logo.png" alt="" />
        </HeaderLeft>
        <HeaderRight item xl={6} md={7} columnGap={2} buttonColor={buttonColor} size={isMdDown}>
          <HeaderLink size={isMdDown ? 'true' : null}>Our story</HeaderLink>
          <HeaderLink size={isMdDown ? 'true' : null}>Membership</HeaderLink>
          <HeaderLink size={isMdDown ? 'true' : null}>Write</HeaderLink>
          <HeaderLink size={isMdDown ? 'true' : null} to={authRoute.LOGIN}>
            Sign In
          </HeaderLink>
          <CustomButton>Get Started</CustomButton>
        </HeaderRight>
      </HeaderContainer>
    </HeaderMainContainer>
  );
});

export default HeaderLayout;

const HeaderMainContainer = styled(Container)`
  && {
    background-color: ${(props) => props.buttonColor.backgroundColor};
    transition: background-color 0.5s ease;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 99999;
    box-shadow: ${(props) =>
      props.buttonColor.showBackground || !['/'].includes(props.location.pathname)
        ? '0 4px 8px rgba(0, 0, 0, 0.2)'
        : ''};
  }
`;

const HeaderContainer = styled(Grid)((props) => ({
  height: props.size ? smallSizeHeaderHeight : headerHeight,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: props.size ? '0.2rem 0.5rem 0px 0.5rem' : '0.25rem 1rem 0rem 1rem',
}));

const HeaderLeft = styled(Grid)`
  img {
    max-height: 40px;
    object-fit: cover;
  }
`;

const HeaderRight = styled(Grid)`
  && {
    display: flex;
    justify-content: ${(props) => (props.size ? 'flex-end' : 'space-around')};
    align-items: center;

    button {
      background-color: ${(props) => props.buttonColor.backgroundColor};
      border-radius: 1.5rem;
      padding: 0.4rem 1rem 0.4rem 1rem;
      text-transform: capitalize;

      &:hover {
        background-color: ${(props) => props.buttonColor.backgroundColor};
      }
    }
  }
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  color: black;
  font-weight: 600;
  display: ${(props) => (props.size ? 'none' : 'inline')};
`;
