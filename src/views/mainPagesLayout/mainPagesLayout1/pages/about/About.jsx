import React from 'react';
import ContentBanner from '../../common/component/ContentBanner/ContentBanner';
import InfoContainer from './InfoContainer';
import CommentsComponent from './Comment';

const About = () => {
  return (
    <>
      <ContentBanner title="About Us" />
      <InfoContainer />
      <CommentsComponent />
    </>
  );
};

export default About;
