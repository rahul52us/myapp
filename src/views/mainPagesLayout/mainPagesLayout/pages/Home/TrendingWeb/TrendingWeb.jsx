import React from 'react';
import TrendingWebEle from './element/TrendingWebEle';
import Container from '../../../../../../component/common/Container/Container';
import { Grid } from '@mui/material';
import CoachImage from '../../../assests/CoachWeb.png';
import CourseImage from '../../../assests/CourseImage.png';
import Web1 from '../../../assests/web1.png';
import { observer } from 'mobx-react-lite';
import ComponentTitle from '../../common/component/ComponentTitle';

const TrendingWeb = observer(() => {
  const cardData = [
    {
      title: 'Create Your Online Courses Website.',
      preTitle: 'FOR ONLINE COURSES',
      Image: Web1,
      gradiant: 'linear-gradient(151.71deg, #29C986 0%, #2FC8E5 100%) !important;',
      tags: [
        { name: 'individual instructor' },
        { name: 'multiple instructor' },
        { name: 'Marketplace' },
        { name: 'Single Course' },
        { name: 'Like Udemy' },
        { name: '& More...' },
      ],
    },
    {
      preTitle: 'FOR UNIVERSITY OR SCHOOL EDUCATION',
      title: 'Create Your Education Website.',
      Image: CourseImage,
      gradiant: 'linear-gradient(151.71deg, #FF652D 0%, #FFA426 100%) !important;',
      tags: [
        { name: 'individual instructor' },
        { name: 'multiple instructor' },
        { name: 'Marketplace' },
        { name: 'Single Course' },
        { name: 'Like Udemy' },
        { name: '& More...' },
      ],
    },
    {
      preTitle: 'FOR PROFETIONAL COCHING',
      title: 'Create Your Coaching and Training Website.',
      Image: CoachImage,
      gradiant: 'linear-gradient(151.71deg, #30C4FF 0%, #7259FF 100%) !important;',
      tags: [
        { name: 'individual instructor' },
        { name: 'multiple instructor' },
        { name: 'Marketplace' },
        { name: 'Single Course' },
        { name: 'Like Udemy' },
        { name: '& More...' },
      ],
    },
  ];
  return (
    <Container style={{ marginTop: '1rem' }}>
      <ComponentTitle title="ALL IN ONE TEMPLATE" subTitle='Why Choose Histudy'/>
      <Grid container columnSpacing={5} rowSpacing={1}>
        {cardData.map((item, index) => {
          return (
            <Grid item xl={4} xxl={4} md={4} sm={12} xs={12} key={index}>
              <TrendingWebEle
                preTitle={item.preTitle}
                title={item.title}
                Image={item.Image}
                gradiant={item.gradiant}
                tags={item.tags}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
});

export default TrendingWeb;

