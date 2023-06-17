import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../../../../store/store';
import PieChart from '../../../../component/charts/PieChart/PieChart';
import LineSkeleton from '../../../../component/LineSkeleton/LineSkeleton';
import CustomPaper from '../../../../component/Paper/Paper';
import { Box } from '@mui/material';
import Typography from '../../../../component/Typography/Typography';

const UserCountChart = observer(() => {
  const {
    DashStore: { userCounts },
  } = store;

  return userCounts ? (
    <CustomPaper sx={{ padding: 1.5, borderRadius: '15px' }} elevation={5}>
      <Box>
        <Typography variant="h6" style={{color:'#5b626b', fontWeight: 600, fontSize:'14px'}}>Obtain Users Percentages</Typography>
        <Typography variant="h6" style={{fontSize:'18px',fontWeight:800,marginTop:'5px'}}>
           {Object.values(userCounts).reduce((accumulator, currentValue) => accumulator + currentValue, 0)} Users <sub style={{fontSize:'12px', color:'gray'}}>(Average)</sub>
        </Typography>
      </Box>
      <PieChart
        labels={userCounts ? Object.keys(userCounts) : []}
        values={userCounts ? Object.values(userCounts) : []}
      />
    </CustomPaper>
  ) : (
    <LineSkeleton style={{ height: '90%', width: '100%', minHeight: '350px' }} />
  );
});

export default UserCountChart;
