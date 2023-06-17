import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useTheme } from '@mui/material';

const ScrollToTop = observer(() => {
  const theme = useTheme();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollToTopButton onClick={handleClick} className={showButton ? 'show' : ''} theme={theme}>
      <KeyboardArrowUpIcon fontSize="large" />
    </ScrollToTopButton>
  );
});

export default ScrollToTop;

const ScrollToTopButton = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 50%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: ${(props) => `${props.theme.palette.primary.buttonColor}`};
  border: ${(props) => `2px solid ${props.theme.palette.primary.whiteColor}`};
  color: ${(props) => props.theme.palette.primary.whiteColor};
  padding: 0.2rem 0.4rem;
  transition: 0.6s ease-in;

  &.show {
    opacity: 1;
  }

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.whiteColor};
    color: ${(props) => props.theme.palette.primary.buttonColor};
    border: ${(props) => `2px solid ${props.theme.palette.primary.buttonColor}`};
    transition: 0.6s ease-in;
  }
`;
