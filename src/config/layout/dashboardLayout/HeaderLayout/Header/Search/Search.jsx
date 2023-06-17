import React from 'react';
import { TextField } from '@mui/material';
import { SearchOutlined, ClearOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const SearchField = styled(TextField)`
  .MuiInputBase-root {
    background-color: #ffffff;
    border-radius: 4px;
    transition: width 0.3s ease-in-out;
    width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
  }

  .MuiInputBase-input {
    padding: 8px;
  }
`;

const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  left: 8px;
  color: #3f51b5;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'scale(0)' : 'scale(1)')};
`;

const ClearIcon = styled(ClearOutlined)`
  position: absolute;
  right: 8px;
  color: #3f51b5;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
`;

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClear = () => {
    setIsOpen(false);
  };

  return (
    <SearchContainer>
      <SearchIcon isOpen={isOpen} onClick={handleSearchToggle} />
      <SearchField
        isOpen={isOpen}
        placeholder="Search"
        variant="outlined"
        size="small"
      />
      <ClearIcon isOpen={isOpen} onClick={handleClear} />
    </SearchContainer>
  );
};

export default Search;
