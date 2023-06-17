import React from 'react';
import Typography from '../../../../../component/Typography/Typography';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';

const LinkContainer = observer(() => {
  return (
    <Container>
      <Typography variant="h5">INFORMATION</Typography>
      <Grid container mt={2}>
        <Grid item xl={6} xxl={6} sm={6} md={6} xs={6}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Gallery</li>
            <li>Profile</li>
          </ul>
        </Grid>
        <Grid item xl={6} xxl={6} sm={6} md={6} xs={6}>
          <ul>
            <li>Quiz</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Gallery</li>
            <li>Classes</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
});

export default LinkContainer;

const Container = styled.div({
  margin: 8,
  marginTop:4,
  h5: {
    color: '#3d56f0',
    fontWeight: 800,
  },
  li: {
    margin: 10,
    cursor: 'pointer',
    fontWeight: 600,
    fontSize:'18px'
  },
});
