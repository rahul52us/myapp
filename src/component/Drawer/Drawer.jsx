import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@mui/material';
import { observer } from 'mobx-react-lite';

const CustomDrawer = observer(({ open, setOpen, anchor, children, ...rest }) => {
  // const theme = useTheme();
  return (
    <div>
      <Drawer
        anchor={anchor}
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 10,
            // backgroundColor: theme.palette.primary.main,
            ...rest,
          },
        }}
      >
        {children}
      </Drawer>
    </div>
  );
});

CustomDrawer.defaultTypes = {
  anchor: 'right',
};

CustomDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  anchor: PropTypes.string,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CustomDrawer;
