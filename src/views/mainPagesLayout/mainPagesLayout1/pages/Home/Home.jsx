import React from 'react';
import { observer } from 'mobx-react-lite';
import HomeSlider from './component/HomeSlider/HomeSlider';
import HomeWelcome from './component/HomeWelCome/HomeWelcome';
import HomeBadge from './component/HomeBadge/HomeBadge';
import Testimonial from './component/Testimonial/Testimonial';
import Teacher from '../teacher/Teacher';

const Home = observer(() => {
  return (
    <>
      <HomeSlider />
      <HomeWelcome />
      <HomeBadge />
      <Teacher main={1} />
      <Testimonial />
    </>
  );
});

export default Home;
