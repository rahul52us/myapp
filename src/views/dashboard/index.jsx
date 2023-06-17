import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import DashboardIndexChart from './component/DashboardIndexChart';
import DashboardNotePage from './component/DashboardNotePage';
import DashboardTopBanner from './component/DashboardTopBanner';
import { observer } from 'mobx-react-lite';
import CustomBreadcrumbs from '../../component/Breadcrumb/Breadcrumb';
import Title from '../../component/DocumentTitle/Title';
import DashCard from './component/DashCard';
import store from '../../store/store';

const Dashboard = observer(() => {
  const {
    DashStore: { GetWebCount, webCount },
    auth: { openNotification },
  } = store;

  useEffect(() => {
    if (webCount === null) {
      GetWebCount()
        .then(() => {})
        .catch((err) => {
          openNotification({ message: err.message, type: 'error' });
        });
    }
  }, []);

  return (
    <Box>
      <Title title="dashboard" />
      <CustomBreadcrumbs data={[{ link: '/', title: 'Home' }, { title: 'Dashboard' }]} />
      <DashboardNotePage />
      <DashboardTopBanner />
      <DashCard />
      <DashboardIndexChart />
    </Box>
  );
});

export default Dashboard;
