import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Grid } from '@mui/material';

const TestimonialElem = ({ name, profession, img, description }) => {
  return (
    <Box sx={{minHeight:'200px', height:'min-content' ,border:'3px dashed black' , borderRadius: '10px' , padding : 3 , m : 2}}>
      <Grid container>
        <Grid item md={3} xl={3} xxl={3} sm={12} xs={12} sx={{ display:'flex' , justifyContent:'center' }}>
          <Avatar src={img} alt={name} sx={{width : 140 , height : 140 }}/>
          {profession}
        </Grid>
        <Grid item md={9} xl={9} xxl={9} sm={12} xs={12} mt={3}>
          {description}
        </Grid>
      </Grid>
    </Box>
  );
};

TestimonialElem.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
};
export default TestimonialElem;
