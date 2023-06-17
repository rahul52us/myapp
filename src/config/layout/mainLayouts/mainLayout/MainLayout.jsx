import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderLayout from './HeaderLayout/HeaderLayout';
import FooterLayout from './FooterLayout/FooterLayout';
import { headerHeight, smallSizeHeaderHeight } from './config/constant';
import { useDeviceInfo } from '../../../../component/CustomHooks/useDevice';
import CustomLoader from '../../../../component/Loader/CustomLoader';

const MainLayout = () => {
  const { isMdDown } = useDeviceInfo();
  const location = useLocation();
  return (
    <>
      <HeaderLayout />
      <div
        style={{
          marginTop: !['/'].includes(location.pathname)
            ? isMdDown
              ? smallSizeHeaderHeight
              : headerHeight
            : '',
        }}
      >
        <Suspense fallback={<CustomLoader />}>
          <Outlet />
        </Suspense>
      </div>
      <FooterLayout />
    </>
  );
};

export default MainLayout;
