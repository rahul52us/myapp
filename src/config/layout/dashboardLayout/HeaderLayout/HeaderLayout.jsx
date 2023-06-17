import React from 'react';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HeaderSetting from './Header/Settings/HeaderSetting';
import Sidebar from '../sidebarLayout/SidebarLayout';
import CustomDrawer from '../../../../component/Drawer/Drawer';
import { Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuIcon from '@mui/icons-material/Menu';
import store from '../../../../store/store';
import Tooltip from '../../../../component/Tooltip/Tooltip';
import Search from './Header/Search/Search';
import HeaderProfile from './Header/Profile/HeaderProfile';
import Notification from './Header/Notifications/Notification';

const HeaderLayout = observer(() => {
  const {
    layout: {
      headerSettingDrawerFun,
      fullScreenModeFun,
      fullScreenMode,
      MobileSidebar,
      MobileSidebarFun,
    },
  } = store;
  const theme = useTheme();

  return (
    <>
      <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xl={9} md={10} xs={6}>
          {useMediaQuery(theme.breakpoints.down('xl')) ? (
            <IconButton onClick={() => MobileSidebarFun(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => fullScreenModeFun(!fullScreenMode)}>
              {!fullScreenMode ? <ArrowBackIcon /> : <ArrowForwardIcon />}
            </IconButton>
          )}
        </Grid>
        <Grid item xl={3} md={2} xs={6}>
          <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xl={5} xs={2}>
              <Search />
            </Grid>
            <Grid item xl={2} xs={3}>
              <Notification />
            </Grid>
            <Grid item xl={2} xs={3}>
              <Tooltip title="setting" placement="bottom">
                <IconButton onClick={() => headerSettingDrawerFun(true)}>
                  <SettingsSuggestIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item xl={3} xs={4}>
              <HeaderProfile />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <HeaderSetting />
      <CustomDrawer open={MobileSidebar} setOpen={() => MobileSidebarFun(false)} anchor="left">
        <Sidebar />
      </CustomDrawer>
    </>
  );
});

export default HeaderLayout;
