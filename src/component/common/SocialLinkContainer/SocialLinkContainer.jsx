import { Icon, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import { FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material';


const SocialLinkContainer = observer(() => {
  const theme = useTheme();
  return (
    <LinkIconContainer theme={theme}>
      <Icon>
        <FacebookOutlined fontSize='small'/>
      </Icon>
      <Icon>
        <Twitter fontSize='small'/>
      </Icon>
      <Icon>
        <Instagram fontSize='small'/>
      </Icon>
      <Icon>
        <LinkedIn fontSize='small'/>
      </Icon>
    </LinkIconContainer>
  );
});

export default SocialLinkContainer;

const LinkIconContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-top: 1rem;
  cursor: pointer;
  && {
    span {
      border-radius: 100%;
      height: 40px;
      width: 40px;
      padding: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #faeded;
      transition: background-color 0.3s ease-in;
      &:hover {
        background-color: ${(props) => props.theme.palette.primary.buttonColor};
        svg {
          color: ${(props) => props.theme.palette.primary.whiteColor};
        }
      }
    }
    svg {
      font-family: 'feather' !important;
      color: ${(props) => props.theme.palette.primary.textColor};
      transition: color 0.2s ease-in; /* Add transition property to the color */
    }
  }
`;
