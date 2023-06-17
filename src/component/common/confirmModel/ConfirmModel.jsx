import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material';

const ConfirmModel = ({ open, close, title, children, containerWidth, ...rest }) => {
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => close(false)}
      aria-labelledby="responsive-dialog-title"
      sx={{
        flexShrink: 0,
        '& .MuiDialog-paper': {
          backgroundColor: theme.palette.primary.main,
        },
      }}
      {...rest}
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText sx={{ minWidth: !fullScreen && 520 }}></DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

ConfirmModel.propTypes = {
  children: PropTypes.node.isRequired,
  containerWidth: PropTypes.string,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default ConfirmModel;
