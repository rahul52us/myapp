import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Container from '../../../../../../component/common/Container/Container';
import ServiceCard from './element/ServiceCard';
import { observer } from 'mobx-react-lite';
import PerformanceFastIcon from '../../../assests/performanceFast.png';
import ResponsiveIcon from '../../../assests/responsiveIcon.png';
import SupportIcon from '../../../assests/supportIcon.png';
import TestIcon from '../../../assests/TestTempIcon.png';

const BannerService = observer(() => {
  const Services = [
    {
      title: 'Fast Performance',
      subTitle:
        'Optimized for a smaller build size, faster dev compilation and dozens of other improvements.',
      icon: PerformanceFastIcon,
    },
    {
      title: 'Perfect Responsive',
      subTitle:
        'Our template is full perfect for all device. You can visit our template all device easily.',
      icon: ResponsiveIcon,
    },
    {
      title: 'Fast & Friendly Support',
      subTitle:
        'We are provide 24 hours support for all clients.You can purchase without hesitation',
      icon: SupportIcon,
    },
    {
      title: 'Easy to Use',
      subTitle: 'Create your own custom template or section by copying, pasting, and assembling.',
      icon: TestIcon,
    },
  ];
  return (
    <Container containerWidth={'80%'}>
      <BannerServiceContainer container rowSpacing={2}>
        {Services.map((item, index) => {
          return (
            <Grid item md={6} xs={12} xl={3} xxl={3} sm={6} key={index}>
              <ServiceCard title={item.title} subTitle={item.subTitle} Icon={item.icon} />
            </Grid>
          );
        })}
      </BannerServiceContainer>
    </Container>
  );
});

export default BannerService;

const BannerServiceContainer = styled(Grid)`
  min-height: 400px;
`;
