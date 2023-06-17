import { Grid } from '@mui/material';
import React from 'react';

const PageNotFound = () => {
  return (
    <Grid
      spacing={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 5,
        height:'60vh'
      }}
      container
    >
      <Grid item>
        <img
          src="https://media.istockphoto.com/id/1153372686/photo/404-error-page-not-found.jpg?b=1&s=170667a&w=0&k=20&c=yAVb0dfxHGQooo1-kmjyGnM5SY22TE82x34IfHFfhLI="
          alt="not found"
        />
      </Grid>
    </Grid>
  );
};

export default PageNotFound;






// import React from 'react';
// import BackendPattern from '../common/assets/images/patternBackground.jpg';
// import { BackgroundSkyAnimation } from '../common/assets/images/backgroundSkyAnimation';
// import styled from 'styled-components';

// const About = () => {
//   return (
//     <AboutContainer>
//       <BackImageContainer>
//         <img src={BackgroundSkyAnimation} alt="" />
//       </BackImageContainer>
//     </AboutContainer>
//   );
// };

// export default About;

// const AboutContainer = styled.div({
//   img: {
//     width: '100%',
//     height: '100%',
//   },
// });

// const BackImageContainer = styled.div({
//   width: '100%',
//   height: '300px',
//   background: `url(${BackendPattern})`,
//   position: 'relative',
//   img: {
//     position: 'absolute',
//     height: '80px',
//     bottom: 0,
//   },
// });
