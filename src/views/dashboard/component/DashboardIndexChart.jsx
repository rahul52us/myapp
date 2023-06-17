import { Box, Grid } from '@mui/material';
import React from 'react';
import WebCountChart from './DashCountChart';

const DashboardIndexChart = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} xxl={8} sm={12} xl={8}>
           <h1>this is new for the users</h1>
        </Grid>
        <Grid item xs={12} md={12} xxl={4} sm={12} xl={4}>
          <WebCountChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardIndexChart;
