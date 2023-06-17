import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderLayout1 from './HeaderLayout1/HeaderLayout1';
import styled from 'styled-components';
import { LargeWindowheaderHeight, SmallWindowheaderHeight } from './config/constant/constant';
import { useMediaQuery, useTheme } from '@mui/material';
import FooterLayout1 from './FooterLayout1/FooterLayout1';
import CustomLoader from '../../../../component/Loader/CustomLoader';

const MainLayout1 = () => {
  const theme = useTheme();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <HeaderLayout1 />
      <PageContainer sizeStatus={sizeStatus} theme={theme}>
        <Suspense fallback={<CustomLoader />}>
          <Outlet />
        </Suspense>
        <FooterLayout1 />
      </PageContainer>
    </>
  );
};

export default MainLayout1;

const PageContainer = styled.div({
  marginTop: (props) => (props.sizeStatus ? SmallWindowheaderHeight : LargeWindowheaderHeight),
  height: (props) =>
    `calc(100vh - ${props.sizeStatus ? SmallWindowheaderHeight : LargeWindowheaderHeight})`,
  overflowY: 'auto',
  overflowX: 'hidden',
  backgroundColor: () => '#FFFFFF',
});
