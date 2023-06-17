import React from 'react';
import { observer } from 'mobx-react-lite';
import ToggleButtons from './ToogleButtons/ToogleButtons';
import { Box, Divider, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Typography from '../../../../../../component/Typography/Typography';
import store from '../../../../../../store/store';
import CustomDrawer from '../../../../../../component/Drawer/Drawer';

const HeaderSetting = observer(() => {
  const theme = useTheme();
  const {
    layout: { headerSettingDrawer, headerSettingDrawerFun },
  } = store;
  return (
    <div>
      <CustomDrawer
        open={headerSettingDrawer}
        setOpen={headerSettingDrawerFun}
        anchor="right"
        width="280px"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.palette.primary.main,
            padding: 1.5,
          }}
        >
          <Typography variant="h5">Settings</Typography>
          <IconButton onClick={() => headerSettingDrawerFun(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ margin: 2 }}>
          <Typography variant="subtitle1">Mode</Typography>
          <ToggleButtons />
        </Box>
      </CustomDrawer>
    </div>
  );
});

export default HeaderSetting;
