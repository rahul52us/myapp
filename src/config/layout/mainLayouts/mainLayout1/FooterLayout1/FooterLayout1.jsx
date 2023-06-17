import React from 'react';
import styled from 'styled-components';
import FooterLineImage from '../../../../../views/mainPagesLayout/mainPagesLayout1/common/assets/images/line-bg.png';
import Container from '../../../../../views/mainPagesLayout/mainPagesLayout1/common/component/Container/Container';
// import ImageLogo from '../config/assets/logo.png';
import { Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import Typography from '../../../../../component/Typography/Typography';
import LinkContainer from './LinkContainer';
import FooterNote from './FooterNote';
import { observer } from 'mobx-react-lite';
import store from '../../../../../store/store';

const FooterLayout1 = observer(() => {
  const {WebStore : {web}} = store
  const theme = useTheme();
  const sizeStatus = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <FooterContainer>
      <FooterImageContainer />
      <Container style={{ padding: '15px' }}>
        <Grid container spacing={5}>
          <Grid item xl={3} xxl={3} md={6} sm={6} xs={12}>
            <Grid container>
              <Grid item xl={12} xxl={12} xs={12}>
                <LogoContainer sizeStatus={sizeStatus}>
                  <img src={web?.logo} alt="" />
                </LogoContainer>
              </Grid>
              <Grid item xl={12} xxl={12} xs={12}>
                <Typography mt={2}>
                  {web?.address}
                  <br />
                  Contact us : {web?.phoneNumber1} {web?.phoneNumber2 && ','} {web?.phoneNumber2}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={3} xxl={3} md={6} sm={6} xs={12}>
            <LinkContainer />
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container>
        <FooterNote />
      </Container>
    </FooterContainer>
  );
});

export default FooterLayout1;

const FooterContainer = styled.div({
  background: '#c4eafb',
});

const FooterImageContainer = styled.div({
  height: '80px',
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  background: `url(${FooterLineImage})`,
});

const LogoContainer = styled.div({
  width: '120px',
  height: '80px',
  img: {
    width: (props) => (props.sizeStatus ? '120px' : '160px'),
    height: '100%',
    cursor: 'pointer',
  },
});
