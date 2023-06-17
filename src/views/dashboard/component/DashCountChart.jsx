import { observer } from 'mobx-react-lite';
import React from 'react';
import LineSkeleton from '../../../component/LineSkeleton/LineSkeleton';
import PieChart from '../../../component/charts/PieChart/PieChart';
import store from '../../../store/store';
import CustomPaper from '../../../component/Paper/Paper';
import Typography from '../../../component/Typography/Typography';
import { Box } from '@mui/material';

const WebCountChart = observer(() => {
  const {
    DashStore: { webCount },
  } = store;

  return webCount ? (
    <CustomPaper sx={{ padding: 1.5, borderRadius: '15px' }} elevation={5}>
      <Box>
        <Typography variant="h6" style={{ color: '#5b626b', fontWeight: 600, fontSize: '12px' }}>
          Obtain Percentages
        </Typography>
        <Typography variant="h6" style={{ fontSize: '1rem', fontWeight: 800, marginTop: '5px' }}>
          {Object.values(webCount).reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
          )}{' '}
          Total Overall Data
        </Typography>
      </Box>
      <PieChart
        labels={webCount ? Object.keys(webCount) : []}
        values={webCount ? Object.values(webCount) : []}
        title="Web Counts"
      />
    </CustomPaper>
  ) : (
    <LineSkeleton style={{ height: '90%', width: '100%', minHeight: '350px' }} />
  );
});

export default WebCountChart;
