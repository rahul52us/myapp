import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../../../component/Typography/Typography';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';

const TitleContainer = observer(({ title, subTitle }) => {
  const theme = useTheme();
  var sizeStatus = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid mt={8} mb={3} container sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} md={12} xl={12} xxl={12} sm={12}>
        <Typography
          variant="h3"
          sx={{ color: '#3d56f0', textAlign: 'center' , marginBottom:'15px'}}
          style={{ fontSize: sizeStatus ? '28x' : '35px' , fontWeight:'bold' }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} xl={12} xxl={12} sm={12}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              width: sizeStatus ? '95%' : '45%',
              marginTop: sizeStatus ? '0px' : '-10px',
            }}
          >
            {subTitle}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
});

TitleContainer.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default TitleContainer;
