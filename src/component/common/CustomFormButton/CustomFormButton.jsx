import { Button, Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const CustomFormButton = ({ submitText, cancelText, cancelButton, submitButton, loading }) => {
  return (
    <Grid container sx={{display:'flex', justifyContent:'end'}} mt={2} p={1}>
      <Button onClick={cancelButton}>{cancelText ? cancelText : 'Cancel'}</Button>
      <Button onClick={submitButton} type="submit" disabled={loading} color='success'>
        {submitText ? submitText : 'Submit'}
      </Button>
    </Grid>
  );
};

CustomFormButton.propTypes = {
  loading: PropTypes.bool,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  cancelButton: PropTypes.func,
  submitButton: PropTypes.func.isRequired,
};

export default CustomFormButton;
