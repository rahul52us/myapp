import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';
import { Divider, Slide } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogBox = observer(({ open, close, title, children, ...rest }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Dialog
      fullScreen={false}
      open={open}
      onClose={() => close(false)}
      aria-labelledby="responsive-dialog-title"
      TransitionComponent={Transition}
      TransitionProps={{
        timeout: 700
      }}
      PaperProps={{
        sx: {
          margin: 0,
          padding: 0
        }
      }}
      {...rest}
    >
      {title && (
        <>
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
          <Divider />
        </>
      )}
      <DialogContent sx={{ margin: 0, padding: 0 }}>
        <DialogContentText sx={{ minWidth: fullScreen && '100%' }}></DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
});

DialogBox.defaultProps = {
  title: '',
};

DialogBox.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  submit: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default DialogBox;
