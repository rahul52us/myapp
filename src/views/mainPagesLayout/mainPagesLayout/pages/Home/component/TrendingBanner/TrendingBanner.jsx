import React from 'react';
import styled from 'styled-components';
import Container from '../../../../../../../component/common/Container/Container';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Typography from '../../../../../../../component/Typography/Typography';
import TrendingElement from './element/TrendingElement';
import { Grid } from '@mui/material';
import { useDeviceInfo } from '../../../../../../../component/CustomHooks/useDevice';

const TrendingBanner = () => {
  const { isLgDown } = useDeviceInfo();
  return (
    <TrendingContainer>
      <TrendingTitle>
        <TrendingUpIcon />
        <Typography variant="h6">Trending on Medium</Typography>
      </TrendingTitle>
      <Grid container columnSpacing={1.5} rowSpacing={isLgDown ? 0.5 : 2}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => {
          return (
            <Grid item key={index} xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
              <TrendingElement />
            </Grid>
          );
        })}
      </Grid>
    </TrendingContainer>
  );
};

export default TrendingBanner;

const TrendingContainer = styled(Container)`
  && {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
`;
const TrendingTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  h6 {
    margin-left: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
  }
  svg {
    border: 0.1px solid gray;
    border-radius: 50%;
    padding: 0.1rem;
  }
`;
