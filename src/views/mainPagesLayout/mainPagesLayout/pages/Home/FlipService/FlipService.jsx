import React, { useState } from 'react';
import Container from '../../../../../../component/common/Container/Container';
import ComponentTitle from '../../common/component/ComponentTitle';
import FlipServiceCard from './element/FlipServiceCard';
import { Grid } from '@mui/material';
import FlipBackImg1 from '../../../assests/flipbackImg1.jpg';
import FlipBackImg2 from '../../../assests/flibackimg2.jpg';
import FlipBackImg3 from '../../../assests/flipbackimg3.jpg';
import FlipBackImg4 from '../../../assests/flipbackImg4.jpg';
import FlipFrontImg1 from '../../../assests/flipfrontimg1.jpg';
import FlipFrontImg2 from '../../../assests/flipfrontImg2.jpg';
import FlipFrontImg3 from '../../../assests/flipfrontImg3.jpg';
import FlipFrontImg4 from '../../../assests/flipbfrontImg4.jpg';
import { FavoriteBorderOutlined, FlagOutlined, HeartBrokenOutlined } from '@mui/icons-material';

const FlipService = () => {
  const Data = useState([
    {
      front: {
        title: 'front2',
        img: FlipFrontImg1,
        subTitle: [
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FavoriteBorderOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FlagOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
        ],
      },
      back: {
        title: 'front2',
        img: FlipBackImg1,
      },
    },
    {
      front: {
        title: 'front1',
        img: FlipFrontImg2,
        subTitle: [
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FavoriteBorderOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FlagOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
        ],
      },
      back: {
        title: 'front2',
        img: FlipBackImg2,
      },
    },
    {
      front: {
        title: 'front1',
        img: FlipFrontImg3,
        subTitle: [
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FavoriteBorderOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FlagOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
        ],
      },
      back: {
        title: 'front2',
        img: FlipBackImg3,
      },
    },
    {
      front: {
        title: 'front1',
        img: FlipFrontImg4,
        subTitle: [
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FavoriteBorderOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <FlagOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
          {
            icon: <HeartBrokenOutlined fontSize='small'/>,
            title: 'Health and Wellness',
          },
        ],
      },
      back: {
        title: 'front2',
        img: FlipBackImg4,
      },
    },
  ])[0];

  return (
    <Container style={{ marginTop: '2rem' }}>
      <ComponentTitle title="Our Curriculum" />
      <Grid container rowSpacing={2} columnSpacing={3}>
        {Data.map((item, index) => {
          return (
            <Grid item xl={3} xxl={3} sm={6} md={6} xs={12} key={index}>
              <FlipServiceCard item={item} />
            </Grid>
          );
        })}
        <Grid></Grid>
      </Grid>
    </Container>
  );
};

export default FlipService;
