import React from 'react';
import { Grid } from '@mui/material';
import Welcome1 from '../../../../common/assets/images/welcome1.jpg';
import Welcome2 from '../../../../common/assets/images/welcome2.jpg';
import Welcome3 from '../../../../common/assets/images/welcome3.jpeg';
import Welcome4 from '../../../../common/assets/images/welcome4.jpeg';
import WelcomeImage from './element/WelcomeImage';
import { observer } from 'mobx-react-lite';
import TitleContainer from '../../../../common/component/TitleContainer/TitleContainer';

const HomeWelcome = observer(() => {
  const welcomes = [
    { title: 'To Think Creatively and Create', img: Welcome1 },
    { title: 'To Feel Fne and to Understand Emotions', img: Welcome2 },
    { title: 'To be Independent and Active', img: Welcome3 },
    { title: 'To Apply Knowledge in Life', img: Welcome4 },
  ];

  return (
     <>
      <TitleContainer
        title="Welcome to Kids Center"
        subTitle="Fill your child's childhood with the joy of learning!"
      />
      <Grid container sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }} spacing={2}>
        {welcomes.map((item, index) => {
          return (
            <Grid item key={index} xxl={2} xl={2} md={6} sm={6} xs={12}>
              <WelcomeImage img={item.img} title={item.title} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
});

export default HomeWelcome;
