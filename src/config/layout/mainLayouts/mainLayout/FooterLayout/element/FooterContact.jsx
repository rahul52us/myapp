import React from 'react';
import styled from 'styled-components';
import Typography from '../../../../../../component/Typography/Typography';
import { observer } from 'mobx-react-lite';
import { useTheme } from '@mui/material';

const FooterContact = observer(() => {
  const theme = useTheme();
  return (
    <FooterContactContainer>
      <MainTitle variant="h1" theme={theme}>
        Get Contact
      </MainTitle>
      <ContainerDetails>
        <DetailInfo theme={theme}>
          <span>Phone:</span> (406) 555-0120
        </DetailInfo>
        <DetailInfo theme={theme}>
          <span>E-mail:</span> admin@example.com
        </DetailInfo>
      </ContainerDetails>
      <SubTitle theme={theme}>
         Newsletter
      </SubTitle>
      <FooterContent theme={theme}>
      2000+ Our students are subscribe Around the World.
       Don’t be shy introduce yourself!
      </FooterContent>
      <EmailInput>

      </EmailInput>
    </FooterContactContainer>
  );
});

export default FooterContact;

const FooterContactContainer = styled.div``;
const MainTitle = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-weight: 800;
    color: ${(props) => props.theme.palette.primary.blackColor};
  }
`;

const ContainerDetails = styled.div``;
const DetailInfo = styled.div`
  color: ${(props) => props.theme.palette.primary.textColor};
  margin-top: 0.70rem;
  font-size: 0.96rem;
  span {
    font-weight: 700;
  }
`;

const SubTitle = styled(Typography)`
 && {
    margin-top: 1.4rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.palette.primary.blackColor};
  }
`;

const FooterContent = styled.div`
margin-top: 0.8rem;
color: ${(props) => props.theme.palette.primary.textColor};
`;
const EmailInput = styled.div``;