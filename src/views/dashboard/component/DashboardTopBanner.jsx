import { Box, Grid, IconButton } from '@mui/material';
import React from 'react';
import Typography from '../../../component/Typography/Typography';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import Tooltip from '../../../component/Tooltip/Tooltip';
import { observer } from 'mobx-react-lite';
import store from '../../../store/store';

const DashboardTopBanner = observer(() => {
  const {
    auth: { user },
  } = store;
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'rgb(217,219,221)',
        marginBottom: 3,
        padding: 1,
      }}
    >
      <Grid container>
        <Grid item sm={11} xs={11} md={11} xl={11} xxl={11}>
          <Typography variant="h6" sx={{ fontWeight: 900 }}>
            Default Dashboard
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'primary.textColor', fontWeight: 800 }}>
            {' '}
            Welcome back, {user?.firstName} {user?.lastName}! We ve missed you. 👋
          </Typography>
        </Grid>
        <Grid item sm={1} xs={1} md={1} xl={1} xxl={1}>
          <Tooltip title="reload the page">
            <IconButton>
              <CachedOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
});

export default DashboardTopBanner;
