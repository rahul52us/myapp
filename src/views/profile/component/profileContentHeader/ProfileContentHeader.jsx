import React from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton } from '@mui/material';
import Typography from '../../../../component/Typography/Typography';
import { ArrowBackSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ProfileContentHeader = ({ title, action, profileLink }) => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={11} md={11} sm={11} xxl={11} xl={11}>
        <Grid container sx={{ marginBottom: 2 }}>
          <IconButton
            title="Go Back to list"
            onClick={() => navigate(profileLink)}
            sx={{ marginRight: 3 }}
          >
            <ArrowBackSharp />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Grid>
      </Grid>
      {action && (
        <Grid item xs={1} md={1} sm={1} xxl={1} xl={1}>
          {action}
        </Grid>
      )}
    </Grid>
  );
};

ProfileContentHeader.propTypes = {
  title: PropTypes.string,
  action: PropTypes.any,
  profileLink: PropTypes.string,
};

export default ProfileContentHeader;
