import React, { useState } from 'react';
import CustomButton from '../../Button/Button';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useTheme } from '@mui/material';
import Container from '../Container/Container';

const ButtonTab = observer(() => {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);

  const tabData = [
    {
      label: 'Tab 1',
      content: 'Content for Tab 1',
    },
    {
      label: 'Tab 2',
      content: 'Content for Tab 2',
    },
    // Add more tabs if needed
  ];

  return (
    <Container>
      <div style={{ marginTop: '50px' }}>
        {tabData.map((tab, index) => (
          <TabBtn
            key={index}
            style={{
              backgroundColor: index === selectedTab ? theme.palette.primary.buttonColor : '',
              color: index === selectedTab ? theme.palette.primary.whiteColor : '',
            }}
            variant={selectedTab === index ? 'contained' : 'outlined'}
            onClick={() => setSelectedTab(index)}
            theme={theme}
          >
            {tab.label}
          </TabBtn>
        ))}
      </div>
      <div>{tabData[selectedTab].content}</div>
    </Container>
  );
});

export default ButtonTab;

const TabBtn = styled(CustomButton)`
  && {
    color: ${(props) => props.theme.palette.primary.textColor};
    border-radius: 1rem;
    height: 65px;
    padding: 0 2.2rem;
    border-radius: 500px;
    border: none;
    text-transform: capitalize;
    letter-spacing: -0.6px;
    font-size: 1.1rem;
    line-height: 65px;
    transition: 0.6s;
    background-color: ${(props) => props.theme.palette.primary.whiteColor};
    &:hover {
      background-color: ${(props) => props.theme.palette.primary.buttonColor};
      color: ${(props) => props.theme.palette.primary.whiteColor};
    }
  }
`;
