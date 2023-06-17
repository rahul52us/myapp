import React from 'react';
import CustomPaper from '../../../../../../component/Paper/Paper';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '../../../../../../component/Typography/Typography';
import { Avatar, Box, Icon } from '@mui/material';
import { randomGradientColor } from '../utils/functions';
import { PhoneInTalk } from '@mui/icons-material';
import CustomButton from '../../../../../../component/Button/Button';
import { useNavigate } from 'react-router-dom';
import { getStandards } from '../../../../../../config/utils/profileConstant';

const UserGrid = ({ item, editLink, type }) => {
  const navigate = useNavigate();
  return (
    <UserGridContainer style={{ paddingBottom: '1rem', borderRadius: '1rem 1rem 1rem 1rem' }}>
      <TitleContainer style={{ background: randomGradientColor() }}>
        <Typography variant="h5">
          {item.firstName} {item.lastName}
        </Typography>
        {
          type === "student" ? <Typography variant="h6">{getStandards(item.profile?.standard)?.label}</Typography> : ""
        }
        <ImageContainer>
          <Avatar alt="User Avatar" src={item.pic} />
        </ImageContainer>
      </TitleContainer>
      <InfoContainer>
        <Typography
          sx={{ textAlign: 'center', fontSize: '1rem', marginBottom: '1rem', fontWeight: 800 }}
        >
          {item?.username}
        </Typography>
        {item.phoneNumber && (
          <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
            <Icon>
              <PhoneInTalk />
            </Icon>
            <Typography style={{ marginLeft: '0.8rem', fontWeight: 'bold' }}>
              {' '}
              {item.phoneNumber}
            </Typography>
          </Box>
        )}
        <Typography
          sx={{ textAlign: 'center', marginTop: '1rem', fontSize: '1.2rem', height: '50px' }}
        >
          {item?.profile?.description}
        </Typography>
      </InfoContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center' }} mt={2}>
        <CustomButton variant="contained" onClick={() => navigate(editLink, { state: item.id })}>
          Read More
        </CustomButton>
      </Box>
    </UserGridContainer>
  );
};

UserGrid.propTypes = {
  item: PropTypes.object,
  editLink: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default UserGrid;

const UserGridContainer = styled(CustomPaper)`
  position: relative;
  height: 430px;
  max-height: max-content !important;
  min-height: max-content;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  position: relative;
  h5 {
    margin-top: 1.5rem;
    color: #ffffff;
  }
  h6 {
    font-size: 0.8rem;
    color: #ffffff;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  & > .MuiAvatar-root {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }
`;

const InfoContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
  color: black;
`;
