import React, { Suspense, startTransition, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './sidebarLayout/SidebarLayout';
import {
  contentLargeBodyPadding,
  contentSmallBodyPadding,
  headerHeight,
  headerPadding,
  sidebarWidth,
} from '../../utils/contant';
import styled from 'styled-components';
import HeaderLayout from './HeaderLayout/HeaderLayout';
import { useMediaQuery, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';
import CustomLoader from '../../../component/Loader/CustomLoader';

const DashboardLayout = observer(() => {
  const {
    layout: { fullScreenMode },
    auth: { user, checkPermission },
  } = store;
  const theme = useTheme();
  const navigate = useNavigate();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('xl'));

  useEffect(() => {
    if (!user || !checkPermission({ key: 'dashboard', value: 0 })) {
      startTransition(() => navigate('/'));
    }
  }, [user]);

  return user && checkPermission({ key: 'dashboard', value: 0 }) ? (
    <MainComponent id="mainContainer" fullScreenMode={fullScreenMode}>
      <SidebarContainer
        id="sidebarContainer"
        theme={theme}
        fullScreenMode={fullScreenMode}
        sizeStatus={sizeStatus}
        className={fullScreenMode ? 'fullscreen' : ''}
      >
        <Sidebar />
      </SidebarContainer>
      <Container id="container" fullScreenMode={fullScreenMode}>
        <HeaderContainer
          id="headerMainContainer"
          theme={theme}
          fullScreenMode={fullScreenMode}
          sizeStatus={sizeStatus}
          className={fullScreenMode ? 'fullscreen' : ''}
        >
          <HeaderLayout />
        </HeaderContainer>
        <ContentContainer
          id="contentContainer"
          theme={theme}
          fullScreenMode={fullScreenMode}
          sizeStatus={sizeStatus}
          className={fullScreenMode ? 'fullscreen' : ''}
        >
          <Suspense fallback={<CustomLoader />}>
            <Outlet />
          </Suspense>
        </ContentContainer>
      </Container>
    </MainComponent>
  ) : (
    <p>please wait .... </p>
  );
});

export default DashboardLayout;

const MainComponent = styled.div`
  display: flex;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &.fullscreen {
    margin-left: -${sidebarWidth};
  }
`;

const SidebarContainer = styled.div`
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: ${sidebarWidth};
  display: inline;
  border-right: ${({ theme }) => `1px solid ${theme.palette.primary.borderColor}`};

  &.fullscreen {
    width: 0;
    transition: width 0.3s ease-in-out;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  &.fullscreen {
    margin-left: 0;
  }
`;

const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${headerPadding};
  height: ${headerHeight};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.primary.borderColor}`};
  position: fixed;
  right: 0;
  left: ${(props) => (props.fullScreenMode || props.sizeStatus ? 0 : sidebarWidth)};
  transition: all 0.3s ease-in-out;

  &.fullscreen {
    left: 0;
    width: 100%;
    transition: left 0.3s ease-in-out;
  }
`;

const ContentContainer = styled.div`
  padding: ${({ sizeStatus }) => (sizeStatus ? contentSmallBodyPadding : contentLargeBodyPadding)};
  margin-top: ${headerHeight};
  width: ${({ sizeStatus, fullScreenMode }) =>
    sizeStatus ? `100vw` : fullScreenMode ? '100vw' : `calc(100vw - ${sidebarWidth})`};
  overflow-x: hidden;
  height: calc(100vh - ${headerHeight});
  background-color: ${({ theme }) => theme.palette.primary.backgroundColor};
  transition: all 0.3s ease-in-out;

  &.fullscreen {
    width: 100vw;
    transition: width 0.3s ease-in-out;
  }
`;


