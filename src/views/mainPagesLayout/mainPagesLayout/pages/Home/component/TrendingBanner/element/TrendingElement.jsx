import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Typography from '../../../../../../../../component/Typography/Typography';

const TrendingElement = () => {
  return (
    <TrendingMainContainer>
      <TrendingCountHeader>01</TrendingCountHeader>
      <TrendingElementContainer>
        <TrendingElementHeader>
          <Avatar />
          <TrendingUserDetails variant="p">rahul kushwah</TrendingUserDetails>
        </TrendingElementHeader>
        <TrendingTitle variant="p">
          Thought experiment in the National Library of Thailand
        </TrendingTitle>
        <TrendingDateTime variant="h6">May 25 ·5 min read</TrendingDateTime>
      </TrendingElementContainer>
    </TrendingMainContainer>
  );
};

export default TrendingElement;

const TrendingMainContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
`;

const TrendingElementContainer = styled.div``;
const TrendingCountHeader = styled(Typography)`
  & {
    margin-right: 2rem !important;
    font-size: 1.8rem !important;
    color: lightgray;
  }
`;
const TrendingElementHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  .MuiAvatar-root {
    width: 20px;
    height: 20px;
  }
`;
const TrendingUserDetails = styled(Typography)`
  margin-left: 0.6rem !important;
  font-weight: 600 !important;
  font-size: 0.9rem;
`;

const TrendingTitle = styled(Typography)`
  font-size: 0.90rem !important;
  font-weight: 800 !important;
`;

const TrendingDateTime = styled(Typography)`
  font-size: 0.8rem !important;
  margin-top: 0.4rem !important;
  color: gray;
`;
