import { Grid, useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import LinkHoverText from '../../../../../../component/common/LinkHoverText/LinkHoverText';
import styled from 'styled-components';
import { authRoute } from '../../../../../routes/authenticate_constant_route';
import { useNavigate } from 'react-router-dom';

const FooterBottom = observer(() => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Grid container pt={1} pb={3} columnSpacing={2}>
      <Grid item xl={7} xxl={7} md={12} sm={12} xs={12}>
        <FooterLeftContain theme={theme}>
          Copyright © 2023{' '}
          <LinkHoverText
            text="Rainbow-Themes."
            style={{ margin: '0rem 0.5rem', fontWeight: 600 }}
          />{' '}
          All Rights Reserved
        </FooterLeftContain>
      </Grid>
      <Grid item xl={5} xxl={5} md={12} sm={12} xs={12}>
        <FooterRightContain>
          <FooterService>
            <LinkHoverText text="Terms of service" item style={{ marginTop: '0.9rem' }} />
            <VerticalLine>
              <Line theme={theme} />
              <LinkHoverText text="Privacy Policy" item style={{ marginTop: '0.9rem' }} />
            </VerticalLine>
            <VerticalLine>
              <Line theme={theme} />
              <LinkHoverText text="Subscription" style={{ marginTop: '0.9rem' }} />
            </VerticalLine>
            <VerticalLine onClick={() => navigate(authRoute.LOGIN)}>
              <Line theme={theme} />
              <LinkHoverText text="Login & Register" item style={{ marginTop: '0.9rem' }} />
            </VerticalLine>
          </FooterService>
        </FooterRightContain>
      </Grid>
    </Grid>
  );
});

export default FooterBottom;

const FooterLeftContain = styled.div`
  font-weight: 500;
  color: ${(props) => props.theme.palette.primary.textColor};
  text-align: center;
  margin-top: 0.9rem;
`;
const FooterRightContain = styled.div``;

const VerticalLine = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;

const Line = styled.div`
  position: absolute;
  left: -0.5rem;
  top: 45%;
  height: 50%;
  border-left: 1px solid ${(props) => props.theme.palette.primary.textColor};
`;

const FooterService = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
