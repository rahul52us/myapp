import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDeviceInfo } from '../../../../../../component/CustomHooks/useDevice';
import { useTheme } from '@mui/material';

const ComponentTitle = ({ title, subTitle, proSubTitle }) => {
  const theme = useTheme();
  const { isMdDown } = useDeviceInfo();
  return (
    <TitleContainer isMdDown={isMdDown} proSubTitleColor={theme.palette.primary.buttonColor}>
      <h6>{title}</h6>
      <h1>{subTitle}</h1>
      <h5>{proSubTitle}</h5>
    </TitleContainer>
  );
};

ComponentTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  proSubTitle: PropTypes.string,
};
export default ComponentTitle;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  h6 {
    margin-bottom: 1rem;
    background-color: #b966e721;
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
    color: #b966e7;
    cursor: pointer;
  }
  h1 {
    font-size: ${(props) => (props.isMdDown ? '1.2rem' : '1.9rem')};
    font-weight: 800;
    text-align: center;
    width: ${(props) => (props.isMdDown ? '90%' : '60%')};
  }
  h5 {
    font-size: ${(props) => (props.isMdDown ? '0.7rem' : '0.9rem')};
    font-weight: 600;
    text-align: center;
    width: ${(props) => (props.isMdDown ? '90%' : '60%')};
    color: ${(props) => props.proSubTitleColor};
  }
`;
