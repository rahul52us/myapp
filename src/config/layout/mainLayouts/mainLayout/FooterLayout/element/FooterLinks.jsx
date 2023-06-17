import { useTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import Typography from '../../../../../../component/Typography/Typography';
import TextHover from '../../../../../../component/common/LinkHoverText/LinkHoverText'

const FooterLinks = observer(() => {
  const theme = useTheme();
  return (
    <FooterLinkContainer>
      <MainTitle variant="h1" theme={theme}>
        Get Contact
      </MainTitle>
      <LinkContainer>
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
          return (
            <LinkTitle key={index} theme={theme}>
              <TextHover text="rahul kushwah" />
            </LinkTitle>
          );
        })}
      </LinkContainer>
    </FooterLinkContainer>
  );
});

export default FooterLinks;

const FooterLinkContainer = styled.div``;

const MainTitle = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-weight: 800;
    color: ${(props) => props.theme.palette.primary.blackColor};
  }
`;
const LinkContainer = styled.div``;
const LinkTitle = styled(Typography)`
  && {
    margin-top: 0.8rem;
    color: ${(props) => props.theme.palette.primary.textColor};
  }
`;
