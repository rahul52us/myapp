import React from 'react';
import Container from '../../../../../component/common/Container/Container';
import { Divider, Grid, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Typography from '../../../../../component/Typography/Typography';
import { ArrowRightAlt } from '@mui/icons-material';
import CustomButton from '../../../../../component/Button/Button';
import FooterContact from './element/FooterContact';
import FooterLinks from './element/FooterLinks';
import FooterWebLink from './element/FooterWebLinks';
import SocialLinkContainer from '../../../../../component/common/SocialLinkContainer/SocialLinkContainer';
import FooterBottom from './element/FooterBottom';

const FooterLayout = observer(() => {
  const theme = useTheme();

  return (
    <Container>
      <Divider sx={{ margin: '2rem 0rem' }} />
      <Grid container rowSpacing={3} columnSpacing={2}>
        <Grid item xl={4} xxl={4} md={6} sm={12} xs={12}>
          <InfoContainer>
            <LogoContainer>
              <img src="https://rainbowit.net/html/histudy/assets/images/logo/logo.png" alt="" />
            </LogoContainer>
            <SubTitle theme={theme}>
              We’re always in search for talented and motivated people. Don’t be shy introduce
              yourself!
            </SubTitle>
            <SocialLinkContainer />
            <ContactBtn theme={theme}>
              Contact With Us <ArrowRightAlt />
            </ContactBtn>
          </InfoContainer>
        </Grid>
        <Grid item xl={2} xxl={2} md={6} sm={6} xs={12}>
          <FooterLinks />
        </Grid>
        <Grid item xl={2} xxl={2} md={6} sm={6} xs={12}>
          <FooterWebLink />
        </Grid>
        <Grid item xl={4} xxl={4} md={6} sm={12} xs={12}>
          <FooterContact />
        </Grid>
      </Grid>
      <Divider sx={{ margin: '3rem 0rem 0rem 0rem' }} />
      <FooterBottom />
    </Container>
  );
});

export default FooterLayout;

const InfoContainer = styled.div``;
const LogoContainer = styled.div`
  img {
    max-height: 50px;
    object-fit: cover;
  }
`;

const SubTitle = styled(Typography)`
  && {
    margin-top: 1rem;
    color: ${(props) => props.theme.palette.primary.textColor};
    font-size: 1.05rem;
  }
`;

const ContactBtn = styled(CustomButton)`
  color: black !important;
  font-weight: bold !important;
  && {
    margin-top: 1.5rem;
    border: ${(props) => `1px solid ${props.theme.palette.primary.buttonColor}`};
    padding: 1rem;
    border-radius: 40px;
    box-shadow: ${(props) => `1px 1px 3px ${props.theme.palette.primary.buttonColor}`};
    svg {
      margin-left: 0.5rem;
    }
  }
`;
