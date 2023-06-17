import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import UserCard from './UserCard';
import UserCountChart from './UserCountChart';
import Title from '../../../../component/DocumentTitle/Title';
import CustomBreadcrumbs from '../../../../component/Breadcrumb/Breadcrumb';
import { dashboard } from '../../../../config/routes/dashboard/indexRoutes';
import store from '../../../../store/store';
import CalendarTimeline from '../../../../component/ReactCalender/ReactCalender';
import { handleErrorMessage } from '../../../utils/function';

const UsersIndex = observer(() => {
  const {
    DashStore: { GetUsersCount, userCounts },
  } = store;

  useEffect(() => {
    if (userCounts === null) {
      GetUsersCount()
        .then(() => {})
        .catch((err) => {
          handleErrorMessage(err)
        });
    }
  }, []);

  return (
    <Box>
      <Title title="dashboard" />
      <CustomBreadcrumbs
        data={[
          { link: '/', title: 'Home' },
          { link: dashboard.Home, title: 'Dashboard' },
          { title: 'User Section' },
        ]}
      />
      <UserCard />
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xxl={8} sm={12} xl={8}>
             <CalendarTimeline />
          </Grid>
          <Grid item xs={12} md={12} xxl={4} sm={12} xl={4}>
            <UserCountChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
});

export default UsersIndex;
