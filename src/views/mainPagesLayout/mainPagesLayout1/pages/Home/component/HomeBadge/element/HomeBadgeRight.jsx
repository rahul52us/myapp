import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../../../../../component/Typography/Typography';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const HomeBadgeRight = ({ Icon, title, para }) => {
  return (
    <HomeBadgeRightContainer>
      <Grid container spacing={2}>
        <Grid item xl={1} xxl={1} md={1} sm={1} xs={1}>
          {Icon}
        </Grid>
        <Grid item xl={11} xxl={11} md={11} sm={11} xs={11}>
          <Title>
            <Typography variant="h5">{title}</Typography>
          </Title>
          <Para>
            <Typography variant="h6">{para}</Typography>
          </Para>
        </Grid>
      </Grid>
    </HomeBadgeRightContainer>
  );
};

HomeBadgeRight.propTypes = {
  Icon: PropTypes.any,
  title: PropTypes.string,
  para: PropTypes.string,
};

export default HomeBadgeRight;

const HomeBadgeRightContainer = styled.div({
  '.MuiSvgIcon-root': {
    fontSize: '35px',
    marginRight: '15px',
    marginTop: '5px',
  },
});
const Title = styled.div({
  h5: {
    fontSize: 30,
    color: 'red',
  },
});

const Para = styled.div({
  h6: {
    fontSize: 18,
  },
});
