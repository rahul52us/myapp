import React, { Suspense, useEffect, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import CustomLoader from '../../../component/Loader/CustomLoader';
import { Divider, Grid } from '@mui/material';
import LoginImage from '../../../views/authenticate/assets/login.png';
import ForgotImage from '../../../views/authenticate/assets/forgot.png';
import SignUp from '../../../views/authenticate/assets/singup.png';
import styled from 'styled-components';
import { useDeviceInfo } from '../../../component/CustomHooks/useDevice';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';
import { authRoute } from '../../routes/authenticate_constant_route';
import SocialLinkContainer from '../../../component/common/SocialLinkContainer/SocialLinkContainer';

const AuthenticateLayout1 = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    auth: { user },
  } = store;
  const { isLgDown } = useDeviceInfo();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const getImage = useMemo(() => {
    switch (location.pathname) {
      case authRoute.LOGIN:
        return LoginImage;
      case authRoute.REGISTER:
        return SignUp;
      case authRoute.FORGOT_PASSWORD:
        return ForgotImage;
      default:
        return LoginImage;
    }
  }, [location.pathname]);

  return (
    <Suspense fallback={<CustomLoader />}>
      <Grid container>
        <Grid item md={6} xl={6} xxl={6} sm={12} xs={12}>
          <ImageContainer img={getImage} />
        </Grid>
        <Grid
          item
          md={6}
          xl={6}
          xxl={6}
          sm={12}
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Grid container sx={{ width: isLgDown ? '100%' : '50%' }} mb={'2rem'}>
            <Grid item xl={12} md={12} sm={12} xs={12} xxl={12}>
              <Outlet />
              <Divider>Follow Us On Social</Divider>
              <LinkContainer>
              <SocialLinkContainer />
              </LinkContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Suspense>
  );
});

export default AuthenticateLayout1;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-top: 100%; /* Adjust this value to control the aspect ratio */
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;
