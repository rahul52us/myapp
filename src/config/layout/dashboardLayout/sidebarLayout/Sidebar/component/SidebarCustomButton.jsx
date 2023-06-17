import { Box } from '@mui/material';
import React from 'react';
import { SidebarRoutes } from '../sidebarRoutes';
import CollapsibleSection from '../../../../../../component/Collapse/Collapse';

const SidebarCustomButton = () => {
  return (
    <Box>
      {
        SidebarRoutes.map((item,index) => {
          return (
            <CollapsibleSection item={item} key={index}/>
          )
        })
      }
    </Box>
  );
};

export default SidebarCustomButton;
