import * as React from 'react';

import PropTypes from 'prop-types';
import { Box, ClickAwayListener, Popover } from '@mui/material';
import Typography from '../../../../../../component/Typography/Typography';

const ClickAway = ({title}) =>  {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
      <p onClick={handleClick}>
        {title}
      </p>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{marginTop:'15px'}}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transitionDuration={100}
      >
        <Box sx={{padding:1}}>
          <Typography>{title}</Typography>
        </Box>
      </Popover>
      </div>
    </ClickAwayListener>
  );
}

ClickAway.propTypes = {
  title : PropTypes.string.isRequired
}

export default ClickAway;
