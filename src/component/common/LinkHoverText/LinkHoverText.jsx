import { Icon, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkHoverText = observer(({ text, icon, ...rest }) => {
  const theme = useTheme();
  return (
    <LinkText theme={theme} {...rest}>
      {text} {icon && <StyledIcon>{icon}</StyledIcon>}
    </LinkText>
  );
});

export default LinkHoverText;

LinkHoverText.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

const LinkText = styled.span`
  position: relative;
  transition: color 0.2s;
  cursor: pointer;
  text-transform: capitalize;
  color: ${(props) => props.theme.palette.primary.textColor};

  &:hover {
    color: ${(props) => props.theme.palette.primary.buttonColor};
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    top: 2;
    background-color: ${(props) => props.theme.palette.primary.buttonColor};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: 0.5rem;
`;
