import React from 'react';
import ImageLogo from '../config/assets/logo.png';
import styled from 'styled-components';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import {
  LargeWindowheaderHeight,
  LargeWrapperHeaderHeight,
  SmallWindowheaderHeight,
} from '../config/constant/constant';
import HeaderMenuContainer from './HeaderMenuContainer/HeaderMenuContainer';
import { MergeTypeOutlined } from '@mui/icons-material';
import MainNotes from '../../../../../views/mainPagesLayout/mainPagesLayout1/common/component/MainNote/MainNote';
import { observer } from 'mobx-react-lite';
import store from '../../../../../store/store';

const HeaderLayout1 = observer(() => {
  const {
    WebStore: { web },
  } = store;
  const theme = useTheme();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <HeaderMainContainer>
      {web && (
        <MainNote sizeStatus={sizeStatus}>
          <MainNotes />
        </MainNote>
      )}
      <HeaderWrapperContainer sizeStatus={sizeStatus}>
        <HeaderContainer sizeStatus={sizeStatus}>
          <LogoContainer item xxl={2} xl={2} md={2} sm={4} xs={6} sizeStatus={sizeStatus}>
            <img src={ImageLogo} alt="logo" />
          </LogoContainer>
          <MenuContainer sizeStatus={sizeStatus}>
            <HeaderMenuContainer title="Home" />
            <HeaderMenuContainer title="About" />
            <HeaderMenuContainer title="Classes" />
            <HeaderMenuContainer title="Teachers" />
            <HeaderMenuContainer title="Pages" />
            <HeaderMenuContainer title="Blog" />
            <HeaderMenuContainer title="Gallery" />
            <HeaderMenuContainer title="Contact Us" />
          </MenuContainer>
          <MenuRightContainer sizeStatus={sizeStatus}>
            <IconButton>
              <MergeTypeOutlined />
            </IconButton>
          </MenuRightContainer>
        </HeaderContainer>
      </HeaderWrapperContainer>
    </HeaderMainContainer>
  );
});

export default HeaderLayout1;

const HeaderMainContainer = styled.div({
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  height: (props) => (props.sizeStatus ? SmallWindowheaderHeight : LargeWindowheaderHeight),
});

const MainNote = styled.div({
  display: (props) => (props.sizeStatus ? 'none' : 'inline'),
});

const HeaderWrapperContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: (props) => (props.sizeStatus ? SmallWindowheaderHeight : LargeWrapperHeaderHeight),
});

const HeaderContainer = styled.div({
  padding: '10px',
  display: 'flex',
  alignItem: 'center',
});

const LogoContainer = styled.div({
  display: 'flex',
  justifyContent: (props) => (props.sizeStatus ? 'start' : 'center'),
  width: (props) => (props.sizeStatus ? '90%' : '30%'),
  height: '100%',
  '& > img': {
    width: (props) => (props.sizeStatus ? '120px' : '160px'),
    height: '100%',
    cursor: 'pointer',
  },
});

const MenuContainer = styled.div({
  width: '60%',
  display: (props) => (props.sizeStatus ? 'none' : 'flex'),
  alignItems: 'center',
  justifyContent: 'space-around',
});

const MenuRightContainer = styled.div({
  display: (props) => (props.sizeStatus ? 'flex' : 'none'),
  justifyContent: 'end',
});
