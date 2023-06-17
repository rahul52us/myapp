import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ServiceCard = ({ title, subTitle, Icon }) => {
  return (
    <ServiceCardContainer>
      <ServiceThumbnail>
        <img src={Icon} alt="" />
      </ServiceThumbnail>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </ServiceCardContainer>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
};

export default ServiceCard;

const ServiceCardContainer = styled(Grid)`
  border-right: 1px solid #ffffff1a;
  height: 100%;
  min-height: min-content;
  background-color: #9261f3;
  padding: 3rem;
  border-radius: 0.8rem;
  margin: 0.2rem;
  cursor: pointer;
  transition: transform 0.5s ease-out;

  h3,
  h6 {
    color: #ffffff;
    margin: 0;
  }

  h3 {
    font-size: 1rem;
    margin-top: 1.6rem;
  }

  h6 {
    font-size: 0.8rem;
    margin-top: 1rem;
  }

  :hover {
    background-color: #192335;
    transform: translateY(-20px);
  }
`;

const ServiceThumbnail = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Title = styled.h3`
  margin-top: 1.6rem;
`;

const Subtitle = styled.h6`
  margin-top: 1rem;
`;
