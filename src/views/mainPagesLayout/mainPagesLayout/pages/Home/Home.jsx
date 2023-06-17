import React from 'react';
// import Banner from './component/Banner/Banner';
// import TrendingBanner from './component/TrendingBanner/TrendingBanner';
// import { Divider } from '@mui/material';
import TrendingWeb from './TrendingWeb/TrendingWeb';
import HomeBanner from './HomeBanner/HomeBanner';
import FlipService from './FlipService/FlipService';
import Testimonial from '../testimonial/Testimonial';
// import TrendingBlogs from './TrendingBlogs/TrendingBlogs';

const Home = () => {
  return (
    <>
      {/* <Banner />
      <TrendingBanner />
      <Divider /> */}
      <HomeBanner />
      <TrendingWeb />
      <FlipService />
      <Testimonial />
    </>
  );
};

export default Home;
