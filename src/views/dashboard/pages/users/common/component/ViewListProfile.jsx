import React from 'react';
import PropTypes from 'prop-types';
import DialogBox from '../../../../../../component/Dialog/Dialog';
import Typography from '../../../../../../component/Typography/Typography';
import { Avatar, Box, Icon } from '@mui/material';
import { getStandards } from '../../../../../../config/utils/profileConstant';
import styled from 'styled-components';
import CustomPaper from '../../../../../../component/Paper/Paper';
import { randomGradientColor } from '../utils/functions';
import { PhoneInTalk } from '@mui/icons-material';

const ViewListProfile = ({ title, openListProfile, setOpenListProfile, type }) => {
  return (
    <DialogBox
      open={openListProfile ? true : false}
      close={setOpenListProfile}
      title={title}
      fullWidth={true}
    >
      {openListProfile?.profile ? (
        <UserGridContainer style={{ paddingBottom: '1rem', borderRadius: '1rem 1rem 1rem 1rem' }}>
          <TitleContainer style={{ background: randomGradientColor() }}>
            <Typography variant="h5">
              {openListProfile.firstName} {openListProfile.lastName}
            </Typography>
            {type === 'student' ? (
              <Typography variant="h6">
                {getStandards(openListProfile.profile?.standard)?.label}
              </Typography>
            ) : (
              ''
            )}
            <ImageContainer>
              <Avatar alt="User Avatar" src={openListProfile.pic} />
            </ImageContainer>
          </TitleContainer>
          <InfoContainer>
            <Typography
              sx={{ textAlign: 'center', fontSize: '1rem', marginBottom: '1rem', fontWeight: 800 }}
            >
              {openListProfile?.username}
            </Typography>
            {openListProfile.phoneNumber && (
              <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                <Icon>
                  <PhoneInTalk />
                </Icon>
                <Typography style={{ marginLeft: '0.8rem', fontWeight: 'bold' }}>
                  {' '}
                  {openListProfile.phoneNumber}
                </Typography>
              </Box>
            )}
            <Box>
            <Typography>
              {openListProfile?.profile?.description}
            </Typography>
            </Box>
          </InfoContainer>
        </UserGridContainer>
      ) : ''}
    </DialogBox>
  );
};

ViewListProfile.defaultProps = {
  title: '',
};

ViewListProfile.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  openListProfile: PropTypes.any.isRequired,
  setOpenListProfile: PropTypes.func.isRequired,
};

export default ViewListProfile;

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
