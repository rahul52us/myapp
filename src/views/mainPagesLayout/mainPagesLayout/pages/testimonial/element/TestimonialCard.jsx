import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from '../../../../../../component/Card/Card';
import styled from 'styled-components';
import { Avatar, useTheme } from '@mui/material';
import Typography from '../../../../../../component/Typography/Typography';
import { ArrowRightAlt } from '@mui/icons-material';
import LinkHoverText from '../../../../../../component/common/LinkHoverText/LinkHoverText';

const TestimonialCard = ({ img, userImage }) => {
  const theme = useTheme();

  return (
    <TestimonialContainer>
      <TestimonialHeader theme={theme}>
        <UserInfo theme={theme}>
          <Avatar src={userImage} />
          <UserData theme={theme}>
            <Typography variant="h1">Rahul kushwah</Typography>
            <Typography variant="h6">Executive Designer @ Google</Typography>
          </UserData>
        </UserInfo>
        <img src={img} alt="" className="testimonail-img" />
      </TestimonialHeader>
      <TestimonialContent theme={theme}>
        <Typography variant="h6">
          Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit
          nisi. Vestibulum eget risus velit.
        </Typography>
        <LinkHoverText
          text="Read Project Case Study"
          icon={<ArrowRightAlt />}
          style={{
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            marginTop: '1.3rem',
            color: '#00000',
          }}
        ></LinkHoverText>
      </TestimonialContent>
    </TestimonialContainer>
  );
};

TestimonialCard.propTypes = {
  img: PropTypes.string,
  userImage: PropTypes.string
};

export default TestimonialCard;

const TestimonialContainer = styled(CustomCard)`
  padding: 1rem 0.4rem 0.5rem 0.4rem;
  margin: 0.3rem 0.8rem;
  .testimonail-img {
    margin-bottom: 2rem;
  }
`;
const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  .MuiAvatar-root {
    width: 60px;
    height: 60px;
    border: ${(props) => `2px solid ${props.theme.palette.primary.textColor}`};
    cursor: pointer;
  }
`;

const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  h1 {
    font-weight: 600;
    font-size: 1.4rem;
    color: ${(props) => props.theme.palette.primary.blackColor};
  }
  h6 {
    font-size: 0.8rem;
    color: ${(props) => props.theme.palette.primary.textColor};
  }
`;

const TestimonialContent = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
  h6 {
    font-size: 0.95rem;
    color: ${(props) => props.theme.palette.primary.textColor};
  }
  h5 {
    font-size: 0.8rem;
  }
`;
