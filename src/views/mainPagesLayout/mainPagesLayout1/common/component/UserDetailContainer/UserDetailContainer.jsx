import React from 'react';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import { Box, Grid } from '@mui/material';
import Typography from '../../../../../../component/Typography/Typography';
import LinkContainer from '../../../../../../component/LinkContainer/LinkContainer';

const UserDetailContainer = observer(({ item }) => {
  return (
    <Container containerWidth={'70%'} mt={5}>
      <Grid container spacing={3}>
        <Grid
          item
          sm={12}
          xl={6}
          xxl={6}
          md={12}
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box m={1}>
            <img
              src={
                item?.ProfileDetails?.picture
                  ? item?.ProfileDetails?.picture
                  : 'https://umang.dexignzone.com/react/demo/static/media/pic1.947959ea.jpg'
              }
              alt={`${item.firstName} img is found`}
              style={{width:'100%',height:'100%', objectFit:'cover', borderRadius:'10px'}}
            />
            <LinkContainer
              sx={{ display: 'flex', justifyContent: 'center' }}
              item={item?.ProfileDetails}
              mt={1}
              mb={1}
            />
          </Box>
        </Grid>
        <Grid item sm={12} xl={6} xxl={6} md={12} xs={12}>
          <Typography variant="h5">
            {item.firstName} {item.lastName}
          </Typography>
          <Typography variant="h6">{item?.ProfileDetails?.profession}</Typography>
          <Typography mt={1.5}>{item?.ProfileDetails?.details}</Typography>
        </Grid>
        {item?.ProfileDetails?.skill && (
          <Grid item xl={8} sm={12} md={12} xs={12} xxl={8}>
            <Typography variant="h4" sx={{ color: '#3d56f0' }}>
              My Skill
            </Typography>
            <Typography mt={1.5}>{item?.ProfileDetails?.skill}</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
});

UserDetailContainer.propTypes = {
  item: PropTypes.object,
};

export default UserDetailContainer;
