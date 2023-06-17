import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

const CustomLoader = () => {
  return (
    <Grid
    sx={{
      width:'100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '70vh',
    }}
    container
  >
      <CircularProgress size={60} />
    </Grid>

  )
}
export default CustomLoader
