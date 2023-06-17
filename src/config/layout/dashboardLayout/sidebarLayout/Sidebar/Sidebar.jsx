import { Box, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import Typography from '../../../../../component/Typography/Typography';
import { headerHeight } from '../../../../utils/contant';
import SidebarCustomButton from './component/SidebarCustomButton';

const Sidebar = observer(() => {
  const theme = useTheme();
  return (
    <SidebarContainer theme={theme}>
      <SidebarHeader theme={theme}>
        <Typography variant="h6">Sidebar</Typography>
      </SidebarHeader>
      <Box sx={{ margin: 1 }}>
        <SidebarCustomButton />
      </Box>
    </SidebarContainer>
  );
});
export default Sidebar;

const SidebarContainer = styled.div({
  // backgroundColor: (props) => `${props.theme.palette.primary.main}`,
  height: '100vh',
});

const SidebarHeader = styled.div({
  height: headerHeight,
  borderBottom: (props) => `1px solid ${props.theme.palette.primary.borderColor}`,
});
