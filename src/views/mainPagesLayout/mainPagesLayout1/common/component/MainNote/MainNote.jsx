import React from 'react';
import Typography from '../../../../../../component/Typography/Typography';
import { observer } from 'mobx-react-lite';
import store from '../../../../../../store/store';
import { Box, Grid } from '@mui/material';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import Container from '../Container/Container';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

const MainNote = observer(() => {
  const {
    WebStore: { web },
  } = store;

  return (
    <Box sx={{ backgroundColor: '#ed5ab0' }}>
      <Container containerWidth={"70%"}>
        <Grid container sx={{ justifyContent: 'space-between' }} p={1.8}>
          <Grid item>
            {web?.phoneNumber1 && (
              <Typography
                variant="h4"
                style={{ fontSize: '14px', color: 'white', fontWeight: 'bold' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocalPhoneOutlinedIcon sx={{ mr: 1.5, fontSize: '20px', cursor: 'pointer' }} />{' '}
                  {web?.phoneNumber1}
                  <PinDropOutlinedIcon
                    sx={{ mr: 1, ml: 1.5, fontSize: '20px', cursor: 'pointer' }}
                  />{' '}
                  {web?.address}{' '}
                </Box>
              </Typography>
            )}
          </Grid>
          {web?.endTime && (
            <Grid item>
              <Typography
                variant="h4"
                style={{ fontSize: '14px', color: 'white', fontWeight: 'bold' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <WatchLaterOutlinedIcon sx={{ mr: 1.5, fontSize: '20px', cursor: 'pointer' }} />{' '}
                  <span>
                    Opening {web?.startTime} - {web?.endTime}
                  </span>
                </Box>
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
});

export default MainNote;
