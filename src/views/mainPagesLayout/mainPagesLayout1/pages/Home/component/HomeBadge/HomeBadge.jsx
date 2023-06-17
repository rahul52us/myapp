import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Typography from '../../../../../../../component/Typography/Typography';
import styled from 'styled-components';
import HomeBadgeRight from './element/HomeBadgeRight';
import { AcUnit, DashboardOutlined } from '@mui/icons-material';
import { backgroundCoverImage2 } from '../../../../common/assets/images/backgroundImageCover2';

const HomeBadge = observer(() => {
  const theme = useTheme();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('md'));

  const HomeBadgeData = [
    {
      icon: <AcUnit />,
      title: 'Infants',
      para: 'Lectus placerat a ultricies a,interdum donec eget metus auguen u Fusce mollis imperdiet interdum donec eget metus.',
    },
    {
      icon: <DashboardOutlined />,
      title: 'I myself',
      para: 'Lectus placerat a ultricies a,interdum donec eget metus auguen u Fusce mollis imperdiet interdum donec eget metus.',
    },
    {
      icon: <AcUnit />,
      title: 'Goodie',
      para: 'Lectus placerat a ultricies a,interdum donec eget metus auguen u Fusce mollis imperdiet interdum donec eget metus.',
    },
  ];

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        backgroundImage: `url(${backgroundCoverImage2})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
      spacing={3}
    >
      <Grid item xl={4} xxl={4} md={6} sm={12} xs={12}>
        <HomeBadgeLeft sizeStatus={sizeStatus}>
          <Typography variant="h3">
            Do you dream that your child will become intelligent?
          </Typography>
          <Typography variant="h6">
            {`The concept of school and pre-school education consists of 3 programs of development and training in our academy, developed in collaboration with the institute of the children's university, which will help your children to learn subjects in the best possible way.`}
          </Typography>
        </HomeBadgeLeft>
      </Grid>
      <Grid item xl={4} xxl={4} md={6} sm={12} xs={12}>
        {HomeBadgeData.map((item, index) => {
          return (
            <HomeBadgeRight title={item.title} para={item.para} key={index} Icon={item.icon} />
          );
        })}
      </Grid>
    </Grid>
  );
});

export default HomeBadge;

const HomeBadgeLeft = styled.div({
  h3: {
    width: (props) => (props.sizeStatus ? '80%' : '70%'),
    letterSpacing: 2,
    wordSpacing: '4px',
    fontSize: '36px',
    lineSpacing: '2px',
    color: '#3d56f0',
    fontWeight: 500,
  },
  h6: {
    width: (props) => (props.sizeStatus ? '90%' : '95%'),
    fontSize: '20px',
    textAlign: 'justify',
  },
});
